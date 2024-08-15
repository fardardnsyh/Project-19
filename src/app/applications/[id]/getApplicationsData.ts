import prisma from '@/lib/db/prisma';
import { Application } from '@/lib/db/types';

export async function getApplicationList() {
  const applications = await prisma.application.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  });

  return applications;
}

export const getApplicationById = async (id: string): Promise<Application> => {
  try {
    const app = await prisma.application.findFirstOrThrow({
      where: {
        id,
      },
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });

    if (!app) {
      throw new Error('Application not found');
    }

    return app;
  } catch (error) {
    console.log(error);
    throw new Error('Application not found');
  }
};
