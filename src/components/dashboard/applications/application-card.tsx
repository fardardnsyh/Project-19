'use client';

import { XIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Application } from '@/lib/db/types';

import { DeleteApplicationModal } from './delete-application-modal';

interface Props {
  application: Application;
}

export function ApplicationCard({ application }: Props) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <Card className='group w-[360px] space-y-1 rounded-xl bg-gradient-to-r from-[#232526] to-[#2e2e2e] shadow-lg'>
      <CardHeader className='flex space-y-0 pb-0'>
        <CardTitle className='font- text-sm font-medium text-muted-foreground '>
          <div className='flex items-center justify-between'>
            <span>{application.company}</span>
            <div className='flex items-center space-x-2 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
              <Button
                onClick={() => setIsDialogOpen(true)}
                size='icon'
                variant='link'
                className='group h-5 w-5 outline-none focus-visible:ring-inset'
              >
                <XIcon className='h-5 w-5 text-muted-foreground/80 hover:text-primary' />
                <span className='sr-only'>Delete</span>
              </Button>
              <DeleteApplicationModal
                applicationId={application.id}
                isDeleteApplicationDialogOpen={isDialogOpen}
                setDeleteApplicationDialogOpen={setIsDialogOpen}
              />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`/applications/${application.id}`}>
          <div className='text-2xl font-bold'>{application.title}</div>
          <p className='font-display text-sm text-neutral-400'>
            {application.location}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
}
