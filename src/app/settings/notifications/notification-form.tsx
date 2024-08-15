'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { toast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const notificationsFormSchema = z.object({
  add_application: z.boolean().default(false).optional(),
  update_password: z.boolean().default(false).optional(),
  digest_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<NotificationsFormValues> = {
  add_application: false,
  update_password: false,
  digest_emails: true,
  security_emails: true,
};

export function NotificationsForm() {
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  function onSubmit(data: NotificationsFormValues) {
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
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='add_application'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-xl bg-muted/60 px-6 py-4'>
                  <div className='space-y-0.5'>
                    <Label>Job Applications</Label>
                    <FormDescription className='text-sm'>
                      A Newly application you have added to your list.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='update_password'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-xl bg-muted/60 px-6 py-4'>
                  <div className='space-y-0.5'>
                    <Label>Password Update</Label>
                    <FormDescription className='text-sm'>
                      A notification is sent when you update your password.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='digest_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-xl bg-muted/60 px-6 py-4'>
                  <div className='space-y-0.5'>
                    <Label>Daily Digest</Label>
                    <FormDescription className='text-sm'>
                      Receive suggestions based on your preference.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='security_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-xl bg-muted/60 px-6 py-4'>
                  <div className='space-y-0.5'>
                    <Label>Security emails</Label>
                    <FormDescription className='text-sm'>
                      Receive emails about your account activity and security.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className='text-neutral-300' type='submit'>
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
}
