'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/cn';

import { Grid } from './features';

export const InfiniteMovingCards = ({
  items,
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        'backwards'
      );
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-duration', '120s');
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            className='relative w-[350px] max-w-full shrink-0 overflow-hidden rounded-xl bg-muted px-8 py-6 md:w-[450px]'
            key={item.name}
          >
            <blockquote>
              <Grid size={20} />
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              />
              <span className=' relative z-20 text-sm font-normal leading-[1.6] text-gray-100'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <div className='flex items-center space-x-3'>
                  <Image
                    src='https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='PlanetScale'
                    width={120}
                    height={120}
                    className=' h-12 w-12 rounded-full object-cover object-center'
                  />
                  <span className='flex flex-col gap-1'>
                    <span className=' text-sm font-normal leading-[1.6] text-gray-400'>
                      {item.name}
                    </span>
                    <span className=' text-sm font-normal leading-[1.6] text-gray-400'>
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
