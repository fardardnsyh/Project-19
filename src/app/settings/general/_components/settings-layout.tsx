'use client';

import { Separator } from '@/components/ui/separator';
import { UserProfileProps } from '@/types/user';

import { GeneralSettingsForm } from './form';

export default function UserGeneralSettings({ user }: UserProfileProps) {
  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          Manage settings for your Onyx profile
        </p>
      </div>
      <Separator />
      <GeneralSettingsForm user={user} />
    </div>
  );
}
