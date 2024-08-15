import { Suspense } from 'react';

import { ApplicationsContent } from '@/components/dashboard/application-content';

import { getApplicationList } from '../applications/[id]/getApplicationsData';

async function DashboardPage() {
  const applications = await getApplicationList();

  return (
    <Suspense>
      <ApplicationsContent applications={applications} />
    </Suspense>
  );
}

export default DashboardPage;
