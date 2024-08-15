import { notFound } from 'next/navigation';

import prisma from '@/lib/db/prisma';

import UserGeneralSettings from './general/_components/settings-layout';

interface Props {
  params: {
    id: string;
  };
}

export default async function SettingPage({ params: { id } }: Props) {
  const userProfileData = await prisma.user.findFirstOrThrow({
    where: {
      id: {
        equals: id,
      },
    },
    include: {
      socialLinks: true,
      skills: true,
      applications: true,
    },
    orderBy: {
      updatedAt: 'asc',
    },
  });

  if (!userProfileData) return notFound();

  return <UserGeneralSettings user={userProfileData} />;
}
