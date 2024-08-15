'use client';

import { Application } from '@/lib/db/types';

import { columns } from './data-table/columns';
import { DataTable } from './data-table/data-table';

interface TableViewProps {
  applications: Application[];
}

export function TableView({ applications }: TableViewProps) {
  return (
    <div className='py-4'>
      <DataTable data={applications} columns={columns} />
    </div>
  );
}
