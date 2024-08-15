'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { StatusBadge } from '@/components/ui/status-badge';
import type { Application, ApplicationStatus } from '@/lib/db/types';
import { getRelativeTime } from '@/utils/time';

import { CellAction } from './cell-action';
import { DataTableColumnHeader } from './data-table-column-header';

export const columns: ColumnDef<Application>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'company',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Company' />
    ),
    cell: ({ row }) => <div>{row.getValue('company')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'location',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Location' />
    ),
    cell: ({ row }) => <div>{row.getValue('location')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'datePosted',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Posted' />
    ),
    cell: ({ row }) => <div>{getRelativeTime(row.getValue('datePosted'))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const status = row.getValue('status') as ApplicationStatus;

      return (
        <div className='flex w-[100px] items-center'>
          <StatusBadge status={status} className='font-medium' />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
