/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import Editor from '@/components/editor/rich-editor';
import { useToast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/cn';
import type { Application } from '@/lib/db/types';

import { updateApplication } from './_actions';
import {
  CreateOrUpdateApplicationSchema,
  createOrUpdateApplicationSchema,
} from './zod-schema';

interface EditApplicationModalProps {
  application: Application;
  isEditApplicationModalOpen?: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsEditApplicationModalOpen: (o: boolean) => void;
}

export function EditApplicationModal({
  application,
  isEditApplicationModalOpen,
  setIsEditApplicationModalOpen,
}: EditApplicationModalProps) {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const status = ['APPLIED', 'INTERVIEW', 'REJECTED', 'OFFER', 'CLOSED'];
  const today = new Date();

  const form = useForm<CreateOrUpdateApplicationSchema>({
    resolver: zodResolver(createOrUpdateApplicationSchema),
    mode: 'onChange',
    defaultValues: {
      title: application.title,
      company: application.company,
      description: application.description,
      Url: application.Url as string,
      location: application.location,
      datePosted: application.datePosted,
      status: application.status,
    },
  });

  async function onSubmit(data: CreateOrUpdateApplicationSchema) {
    try {
      await updateApplication(data, id as string);
      setLoading(true);
      toast({
        variant: 'mytheme',
        title: 'This Application has been updated.',
      });
      router.refresh();
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
      setIsEditApplicationModalOpen(false);
    }
  }

  return (
    <>
      <Dialog
        open={isEditApplicationModalOpen}
        onOpenChange={(o) => setIsEditApplicationModalOpen(o)}
      >
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className='bg-[#1d1d1d] px-8 py-6 lg:min-w-[500px] xl:min-w-[750px]'
        >
          <DialogHeader>
            <DialogTitle className='text-2xl font-semibold text-neutral-100'>
              Edit Application
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-4'
            >
              <div className='grid grid-cols-2 gap-x-3'>
                <FormField
                  name='title'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-muted hover:bg-muted/80'
                          placeholder='Add job title'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='company'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Company name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-muted hover:bg-muted/80'
                          placeholder='Add Company name'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid grid-cols-2 gap-x-3'>
                <FormField
                  control={form.control}
                  name='datePosted'
                  render={({ field }) => (
                    <FormItem className=' mt-[0.551rem] flex flex-col'>
                      <FormLabel className='text-muted-foreground/80'>
                        Posted in
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              className={cn(
                                'font-light text-muted-foreground/70 hover:bg-muted/80 hover:text-muted-foreground',
                                !field.value && 'text-muted-foreground/70'
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Choose a date</span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            defaultMonth={today}
                            toDate={today}
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='Url'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Job URL
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-muted hover:bg-muted/80'
                          placeholder='https://www.linkedin.com/jobs/'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <FormField
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Status
                      </FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className='text-muted-foreground/70'>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {status.map((st, idx) => (
                            <SelectItem
                              className='text-muted-foreground hover:bg-[#2d2d2d]'
                              value={st}
                              key={idx}
                            >
                              {st}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='location'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-muted-foreground/80'>
                        Location
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='border-none bg-muted hover:bg-muted/80'
                          placeholder='Add location'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Editor value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className='flex-row items-center justify-end gap-1 pt-4 '>
                <Button
                  type='button'
                  onClick={() => setIsEditApplicationModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  disabled={form.formState.isSubmitting || loading}
                  className='bg-hero hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:bg-none'
                  type='submit'
                >
                  {form.formState.isSubmitting || loading ? (
                    <Spinner />
                  ) : (
                    'Update'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
