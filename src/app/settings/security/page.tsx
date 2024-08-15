import { Separator } from '@/components/ui/separator';

import { SecurityForm } from './security-form';

export default function SecurityPage() {
  return (
    <div className='space-y-6'>
      <div className='ml-4'>
        <h3 className='text-lg font-semibold tracking-wide'>
          Security & Access
        </h3>
        <p className='text-sm text-muted-foreground'>
          Keep your account secure
        </p>
      </div>
      <Separator orientation='vertical' />
      <SecurityForm />
    </div>
  );
}
