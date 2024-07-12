'use client';

import { useState } from 'react';
import Link from 'next/link';

import { EllipseIcon } from '#/components/icons/ellipse';
import { ArrowRightIcon } from '#/components/icons/arrow-right';

import { cn } from '#/lib/utils';
import { OnBoardContentItem } from '#/lib/content';

export const OnBoardCarousel = ({ items }: { items: OnBoardContentItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='container w-full absolute bottom-6 z-10'>
      <div className='bg-primary flex flex-col justify-between text-white p-8 rounded-[48px] h-[400px]'>
        <div className='space-y-4'>
          <div className='text-[32px] leading-10 font-semibold text-center'>
            {items[currentIndex].title}
          </div>
          <div className='text-sm text-center'>
            {items[currentIndex].description}
          </div>
          <div className='flex justify-center gap-2'>
            {items.map((_, index) => (
              <button
                key={index}
                className={cn('h-[6px] w-6 rounded-full', {
                  'bg-white': currentIndex === index,
                  'bg-[#C2C2C2]': currentIndex !== index,
                })}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {currentIndex === items.length - 1 ? (
          <div className='relative h-[94px] w-[94px] flex items-center justify-center self-center z-10'>
            <EllipseIcon className='absolute animate-[spin_3s_ease_infinite] -z-10' />
            <Link
              href='/login'
              className='bg-white h-[62px] w-[62px] rounded-full flex items-center justify-center'
            >
              <ArrowRightIcon color='#FE8C00' />
            </Link>
          </div>
        ) : (
          <div className='flex justify-between items-center'>
            <Link
              href='/login'
              className='text-sm font-semibold'
            >
              Skip
            </Link>
            <button
              className='text-sm font-semibold flex items-baseline gap-2'
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              Next
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
