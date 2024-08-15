'use client';

import { InfiniteMovingCards } from './infinite-moving-cards';

export default function Testimonials() {
  return (
    <InfiniteMovingCards
      items={[
        {
          quote:
            'I have a passion for creating innovative and user-friendly software solutions. I am always looking for new challenges to solve.',
          name: 'John Doe',
          title: 'Software Engineer',
        },
        {
          quote:
            'I have a passion for creating innovative and user-friendly software solutions. I am always looking for new challenges to solve.',
          name: 'Jane Doe',
          title: 'UX Designer',
        },
        {
          quote:
            'I have a passion for creating innovative and user-friendly software solutions. I am always looking for new challenges to solve.',
          name: 'Jane Doe',
          title: 'UX Designer',
        },
        {
          quote:
            'I have a passion for creating innovative and user-friendly software solutions. I am always looking for new challenges to solve.',
          name: 'Jane Doe',
          title: 'UX Designer',
        },
        {
          quote:
            'I have a passion for creating innovative and user-friendly software solutions. I am always looking for new challenges to solve.',
          name: 'Jane Doe',
          title: 'UX Designer',
        },
      ]}
      pauseOnHover
    />
  );
}
