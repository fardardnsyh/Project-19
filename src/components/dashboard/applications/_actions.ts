'use server';

import { getServerSession } from 'next-auth';

import prisma from '@/lib/db/prisma';
import { AUTH_OPTIONS } from '@/lib/next-auth-options';

import { CreateOrUpdateApplicationSchema } from './zod-schema';

export async function createApplication(data: CreateOrUpdateApplicationSchema) {
  const session = await getServerSession(AUTH_OPTIONS);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  return prisma.application.create({
    data: {
      ...data,
      userId: session.user.id,
    },
    select: {
      id: true,
    },
  });
}

export async function updateApplication(
  data: CreateOrUpdateApplicationSchema,
  id: string
) {
  const session = await getServerSession(AUTH_OPTIONS);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  const application = await prisma.application.findFirstOrThrow({
    where: {
      id,
    },
  });

  if (!application) {
    throw new Error('No Application was found with this id.');
  }

  await prisma.application.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteApplication(applicationId: string) {
  const session = await getServerSession(AUTH_OPTIONS);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  const application = await prisma.application.findFirstOrThrow({
    where: {
      id: applicationId,
    },
  });

  if (!application) {
    throw new Error('No Application was found with this id.');
  }

  await prisma.application.delete({
    where: { id: applicationId },
  });
}
