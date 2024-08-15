'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import prisma from '@/lib/db/prisma';
import { AUTH_OPTIONS } from '@/lib/next-auth-options';

import {
  ProfileFormSchema,
  profileFormSchema,
} from './_components/profile-schema';

export async function updateGeneralSettings(data: ProfileFormSchema) {
  const session = await getServerSession(AUTH_OPTIONS);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  profileFormSchema.parse(data);

  const existingProfile = await prisma.user.findFirstOrThrow({
    where: {
      id: session.user.id,
    },
  });

  if (!existingProfile) {
    throw new Error('No profile was found for this user.');
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: data.name,
      email: data.email,
      bio: data.bio,
      avatar: data.avatar,
      banner: data.banner,
      location: data.location,
      experience: data.experience,
      skills: {
        deleteMany: {},
        create: data.skills.map((skill) => ({
          id: skill.id,
          text: skill.text,
        })),
      },
    },
  });

  const userLinksToCreate = data.links?.map((link) => ({
    url: link.url,
    user: {
      connect: { id: session.user?.id },
    },
  }));

  try {
    await prisma.$transaction([
      prisma.userLink.deleteMany({
        where: {
          user: {
            some: {
              id: session.user.id,
            },
          },
        },
      }),
      // @ts-ignore
      ...userLinksToCreate.map((userLink) =>
        prisma.userLink.create({
          data: userLink,
        })
      ),
    ]);
  } catch (error) {
    // Handle the error, and possibly log it
    console.error('Transaction error:', error);
    throw error; // Re-throw the error if needed
  } finally {
    await prisma.$disconnect();
  }

  revalidatePath('/settings');

  return {
    message: 'Settings updated successfully',
  };
}
