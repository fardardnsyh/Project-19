'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/cn';

import { FormSchema, loginSchema } from './validators';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAccountForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const callbackUrl = '/dashboard';

  const onSubmit = async (data: FormSchema) => {
    try {
      setLoading(true);
      const res = await signIn('credentials', {
        redirect: false,
        callbackUrl,
        ...data,
      });

      if (res?.error)
        toast({
          variant: 'destructive',
          description: 'Oh no! Something went wrong.',
        });
      router.push(callbackUrl);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-2 grid gap-4'>
            <div className='my-2'>
              <Link
                href='/password-reset'
                className='text-sm text-muted-foreground hover:text-primary/90'
              >
                Forgot your password?
              </Link>
            </div>
            <div className='grid gap-2'>
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        placeholder='Your email address'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid gap-2'>
              <FormField
                name='password'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        placeholder='Your password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='my-8 flex items-center space-x-4'>
            <Button
              size='sm'
              className='bg-hero px-4 hover:bg-hero/90 disabled:cursor-not-allowed disabled:opacity-50'
              type='submit'
              disabled={loading}
            >
              {loading ? <Spinner /> : 'Login'}
            </Button>
            <p className='text-sm text-muted-foreground'>
              Don&apos;t have an account?{' '}
              <Link
                href='/signup'
                className='text-neutral-300 hover:text-neutral-100'
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
