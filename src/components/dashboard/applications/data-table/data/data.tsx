import {
  CalendarDays,
  CheckCheck,
  LockIcon,
  SendIcon,
  XIcon,
} from 'lucide-react';

export const statuses = [
  {
    value: 'APPLIED',
    label: 'Applied',
    icon: SendIcon,
  },
  {
    value: 'INTERVIEW',
    label: 'Interview',
    icon: CalendarDays,
  },
  {
    value: 'REJECTED',
    label: 'Rejected',
    icon: XIcon,
  },
  {
    value: 'OFFER',
    label: 'Offer',
    icon: CheckCheck,
  },
  {
    value: 'CLOSED',
    label: 'Closed',
    icon: LockIcon,
  },
];
