'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { toast } from '@/components/toast/use-toast';
import { Form } from '@/components/ui/form';

import SessionCard from './_components/session-card';

const securityFormSchema = z.object({
  add_application: z.boolean().default(false).optional(),
  update_password: z.boolean().default(false).optional(),
  digest_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type SecurityFormValues = z.infer<typeof securityFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<SecurityFormValues> = {
  add_application: false,
  update_password: false,
  digest_emails: true,
  security_emails: true,
};

export function SecurityForm() {
  const form = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues,
  });

  function onSubmit(data: SecurityFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='ml-4 space-y-1'>
            <p className='text-sm font-medium leading-none'>Sessions</p>
            <p className='text-sm text-muted-foreground'>
              Devices logged into your account
            </p>
          </div>
          <SessionCard
            userBrowser='Chrome'
            userLocation='Casablanca, Ma'
            userMachine='Windows'
          />
        </form>
      </Form>
    </div>
  );
}
