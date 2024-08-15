'use client';

import { motion } from 'framer-motion';
import {
  BarChart2,
  BellRing,
  Blocks,
  CalendarCheck,
  ChevronRight,
  Gauge,
  PackageOpen,
  Rocket,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

export default function Features() {
  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <PackageOpen />,
      title: 'Centralized Organization',
      description:
        'Say goodbye to scattered information, you have a dedicated space to monitor your job search progress.',
    },
    {
      icon: <Gauge />,
      title: 'Insightful Dashboard',
      description:
        'Onyx provides real-time metrics, helping you gauge your job search performance at a glance.',
    },
    {
      icon: <BellRing />,
      title: 'Deadline notifications',
      description:
        'Onyx keep you on track and make sure you Receive timely reminders for upcoming application deadlines',
    },
    {
      icon: <BarChart2 />,
      title: 'Status Tracking',
      description:
        'Track the status of each application seamlessly and monitor every step of your application process.',
    },
    {
      icon: <CalendarCheck />,
      title: 'Interview Coordination',
      description:
        'Sync your calendar and choose available time slots, and arrange your interviews  effortlessly.',
    },
    {
      icon: <Blocks />,
      title: 'Personalized Insights',
      description:
        'Onyx analyzes your application and ensures you make informed decisions and stand out in job market',
    },
  ];

  return (
    <div className='mx-4 my-32 rounded-3xl border border-muted-foreground/20 bg-muted/70 text-center lg:pb-20'>
      <div className='relative overflow-hidden py-16 md:pt-28'>
        <div className='relative z-20 px-6'>
          <div className='w-full'>
            <div className='flex items-center justify-center space-x-1.5 font-medium text-muted-foreground/70 sm:text-lg'>
              <Rocket className='h-5 w-5' />
              <span>Features</span>
            </div>
            <div className='mt-5 flex justify-center font-display text-[1.7rem] font-extrabold leading-[1.3] text-primary md:text-5xl md:leading-[1.15]'>
              <h1 className='max-w-2xl'>
                Job search{' '}
                <span className='bg-gradient-to-l from-purple-800 via-violet-900 to-purple-800 bg-clip-text text-transparent'>
                  leveled up
                </span>
              </h1>
            </div>
            <h3 className='mt-3.5 font-medium text-muted-foreground/70 sm:text-lg'>
              Built for those who seek an opportunity
            </h3>
          </div>

          <div className='mx-auto mt-6 w-fit'>
            <Link
              className='flex w-full items-center justify-center rounded-full p-1 text-primary sm:w-fit'
              href='/signup'
            >
              <span className='flex w-full items-center justify-center  space-x-1 rounded-full bg-hero px-5 py-2 text-sm font-medium hover:bg-hero/70 sm:w-fit'>
                <span>Get Started</span>
                <ChevronRight className='h-5 w-5' />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='py-8 lg:py-20'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-3 lg:gap-8'>
          {features.map((feature) => (
            <motion.div
              variants={variants}
              initial='initial'
              whileHover='hover'
              key={feature.title}
              className='relative overflow-hidden rounded-xl bg-gradient-to-tl from-neutral-800 to-neutral-800 px-10 py-8 text-left'
            >
              <Grid size={20} />
              <p className='relative z-20 text-lg font-semibold text-primary'>
                {feature.title}
              </p>
              <p className='relative z-20 mt-4 text-start text-sm font-normal text-muted-foreground/70'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className='pointer-events-none absolute left-1/2 top-0 -ml-4 -mt-2 h-full w-full [mask-image:linear-gradient(gray,transparent)]'>
      <div className='absolute inset-0 bg-gradient-to-r from-neutral-600 via-neutral-700 to-neutral-900 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]'>
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x='-12'
          y='4'
          squares={p}
          className='absolute inset-0 h-full w-full fill-muted-foreground stroke-muted-foreground/70 mix-blend-overlay'
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = React.useId();

  return (
    <svg aria-hidden='true' {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill='none' />
        </pattern>
      </defs>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className='overflow-visible'>
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth='0'
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
