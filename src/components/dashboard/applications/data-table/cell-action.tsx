'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Application } from '@/lib/db/types';

import { DeleteApplicationModal } from '../delete-application-modal';
import { EditApplicationModal } from '../edit-application-modal';

interface CellActionProps {
  data: Application;
}

export function CellAction({ data }: CellActionProps) {
  const router = useRouter();
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='link'
            className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>

            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>
          <DropdownMenuItem
            onClick={() => router.push(`/applications/${data.id}`)}
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
            Edit
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>

          {/* need to fix the delete / edit modal bug */}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteApplicationModal
        applicationId={data.id}
        isDeleteApplicationDialogOpen={isDeleteDialogOpen}
        setDeleteApplicationDialogOpen={setIsDeleteDialogOpen}
      />
      <EditApplicationModal
        isEditApplicationModalOpen={isEditDialogOpen}
        setIsEditApplicationModalOpen={setIsEditDialogOpen}
        application={data}
      />
    </>
  );
}
