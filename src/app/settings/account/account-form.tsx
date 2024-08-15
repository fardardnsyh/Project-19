'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { toast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

const accountFormSchema = z.object({
  current_password: z.string({
    required_error: 'Password is required.',
  }),
  new_password: z.string({
    required_error: 'Password is required.',
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountForm() {
  const [loading] = useState(false);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 '>
        <FormField
          name='current_password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>Current password</Label>
              <FormControl>
                <Input
                  type='password'
                  className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder=''
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='new_password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>Your Password</Label>
              <FormControl>
                <Input
                  type='password'
                  className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='Enter a new password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size='sm'
          className='text-neutral-300 disabled:cursor-not-allowed disabled:opacity-50'
          type='submit'
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Save Changes'}
        </Button>
      </form>
    </Form>
  );
}
