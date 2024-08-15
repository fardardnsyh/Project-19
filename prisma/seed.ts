import prisma from '@/lib/db/prisma';

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@doe.com',
    },
  });

  await prisma.application.createMany({
    data: {
      company: 'Google',
      title: 'Software Engineer',
      description:
        ' This is a description for the Software Engineer position at Google.',
      location: 'San Francisco, CA',
      datePosted: new Date(),
      status: 'APPLIED',
      userId: user.id,
    },
  });
  console.log('Added applications data');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
