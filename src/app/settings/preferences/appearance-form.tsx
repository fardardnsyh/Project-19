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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { DarkDisplay } from './display/dark';
import { LightDisplay } from './display/light';
import { SystemDisplay } from './display/system';

const appearanceFormSchema = z.object({
  theme: z.enum(['system', 'light', 'dark'], {
    required_error: 'Please select a theme.',
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AppearanceFormValues> = {
  theme: 'light',
};

export function AppearanceForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='theme'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='grid max-w-md  grid-cols-1 gap-8 pt-2 md:max-w-2xl md:grid-cols-2 lg:grid-cols-3'
              >
                <FormItem>
                  <FormLabel className='cursor-pointer [&:has([data-state=checked])>div]:border-blue-600'>
                    <FormControl>
                      <RadioGroupItem value='system' className='sr-only' />
                    </FormControl>
                    <SystemDisplay />
                    <span className='block w-full p-2 text-center font-normal'>
                      System
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className='cursor-pointer [&:has([data-state=checked])>div]:border-blue-600'>
                    <FormControl>
                      <RadioGroupItem value='light' className='sr-only' />
                    </FormControl>
                    <LightDisplay />
                    <span className='block w-full p-2 text-center font-normal'>
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className='cursor-pointer [&:has([data-state=checked])>div]:border-blue-600'>
                    <FormControl>
                      <RadioGroupItem value='dark' className='sr-only' />
                    </FormControl>
                    <DarkDisplay />
                    <span className='block w-full p-2 text-center font-normal'>
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button className='text-neutral-300' type='submit'>
          Update
        </Button>
      </form>
    </Form>
  );
}
