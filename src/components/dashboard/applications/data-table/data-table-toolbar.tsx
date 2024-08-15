'use client';

import { Table } from '@tanstack/react-table';
import { RotateCwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { DataTableSortItems } from '././data-table-sort-items';
import { statuses } from './data/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='mb-2 mt-4 flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Filter applications...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] border-none bg-muted hover:bg-muted/70 focus:bg-muted/60 lg:w-[250px]'
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title='Status'
            options={statuses}
          />
        )}

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <RotateCwIcon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <div className='flex items-center space-x-2'>
        <DataTableSortItems table={table} />
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
