'use client';

import { useSearchParams } from 'next/navigation';

import { Application } from '@/lib/db/types';

import { GridView } from './applications/grid-view';
import { TableView } from './applications/table-view';
import { ApplicationsContentHeader } from './applications-content-header';
import { EmptyApplicationsView } from './empty-applications-view';

interface ApplicationsContentProps {
  applications: Application[];
}

export function ApplicationsContent({
  applications,
}: ApplicationsContentProps) {
  const params = useSearchParams();
  const mode = params.get('mode');

  return (
    <div className='flex-1 px-6'>
      <ApplicationsContentHeader />
      {applications.length === 0 ? (
        <EmptyApplicationsView />
      ) : mode === 'table' ? (
        <TableView applications={applications} />
      ) : (
        <GridView applications={applications} />
      )}
    </div>
  );
}
