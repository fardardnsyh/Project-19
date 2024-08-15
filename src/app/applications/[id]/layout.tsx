import TeamSwitcher from '@/components/dashboard/team-switcher';
import UserNav from '@/components/ui/navigation/user-nav';
import { Application } from '@/lib/db/types';

import { ApplicationList } from './_components/application-list';
import { getApplicationById, getApplicationList } from './getApplicationsData';

interface Props {
  children?: React.ReactNode;
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const id = params.id;

  const application: Application = await getApplicationById(id);

  const title = application.title;
  const company = application.company;
  const description = application.description;

  return {
    title: `${title} - ${company} - Onyx.com`,
    description: `${description}`,
  };
}

async function ApplicationsLayout({ children, params: { id } }: Props) {
  const applications = await getApplicationList();
  return (
    <main>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='hidden flex-col md:flex'>
          <div className='flex h-16 items-center justify-between px-4'>
            <TeamSwitcher />
            <div className='ml-auto flex items-center space-x-4'>
              <UserNav align='end' />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-6'>
        <ApplicationList selected={id} items={applications} />
        {children}
      </div>
    </main>
  );
}

export default ApplicationsLayout;
