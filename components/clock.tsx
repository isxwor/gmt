'use client';

import { useEffect, useState } from 'react';
import { Slider } from './ui/slider';
import { Label } from './ui/label';

export const Clock = () => {
  const [speed, setSpeed] = useState(1);
  const [remaining, setRemaining] = useState(120 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remaining <= 0) {
        clearInterval(interval);
        return;
      }
      setRemaining((prev) => prev - 1);
    }, 1000 / speed);

    return () => clearInterval(interval);
  });

  const seconds = remaining % 60;
  const minutes = Math.floor(remaining / 60) % 60;
  const hours = Math.floor(remaining / 60 / 60) % 60;

  return (
    <>
      <div className='flex mt-6 justify-center'>
        <div className='relative size-64 rounded-full flex items-center justify-center'>
          {Array.from({ length: 60 }).map((_, index) => (
            <div
              key={index}
              style={{ transform: `rotate(${index * 6}deg)` }}
              className='h-full w-px rounded-full bg-muted absolute'
            />
          ))}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              style={{ transform: `rotate(${index * 30}deg)` }}
              className='h-full w-1 rounded-full bg-primary absolute'
            />
          ))}

          <div className='relative size-60 border bg-white rounded-full'>
            <div
              style={{ transform: `rotate(${seconds * 6}deg)` }}
              className='h-28 w-1 rounded-full bg-primary absolute left-[118px] top-2 origin-bottom-left'
            />
            <div className='relative size-40 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'>
              <div
                style={{ transform: `rotate(${minutes * 6}deg)` }}
                className='h-20 w-1 rounded-full bg-muted absolute left-[78px] origin-bottom-left'
              />
            </div>
            <div className='p-4 size-28 bg-primary text-white border border-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center'>
              {hours} : {minutes} : {seconds}
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-5'>
        <Label>
          Speed: <span className='text-muted'>{speed}x</span>
        </Label>
        <Slider
          min={0.25}
          step={0.25}
          max={10}
          onValueChange={(value) => setSpeed(value[0])}
          defaultValue={[speed]}
        />
      </div>
    </>
  );
};
