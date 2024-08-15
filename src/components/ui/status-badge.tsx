import { cn } from '@/lib/cn';
import { type ApplicationStatus } from '@/lib/db/types';

import { Badge } from './badge';

interface Props {
  status: ApplicationStatus;
  className?: string;
}

const STATUS_COLORS = {
  APPLIED: 'bg-blue-500',
  INTERVIEW: 'bg-amber-500',
  REJECTED: 'bg-red-500',
  OFFER: 'bg-green-500',
  CLOSED: 'bg-gray-500',
};

export function StatusBadge({ className, status }: Props) {
  return (
    <Badge
      className={cn(
        `duration-300 ${STATUS_COLORS[status]} capitalize text-white`,
        className
      )}
    >
      {status.toLowerCase()}
    </Badge>
  );
}
