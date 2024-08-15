import { Separator } from '@/components/ui/separator';

import { NotificationsForm } from './notification-form';

export default function NotificationsPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Notifications</h3>
        <p className='text-sm text-muted-foreground'>
          Select the kinds of notifications you get about your applications.
        </p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  );
}
