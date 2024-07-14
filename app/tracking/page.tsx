import { ChevronLeftIcon } from '#/components/icons/chevron-left';
import { Button } from '#/components/ui/button';
import Image from 'next/image';

import { Clock } from '#/components/clock';
import profileImage from '#/public/images/profile.jpeg';

const TrackingPage = () => (
  <div className='pt-8 bg-primary space-y-3'>
    <div className='text-white font-semibold py-3 container flex items-center justify-between'>
      <Button
        variant='outline'
        size='icon'
        className='rounded-full size-9'
      >
        <ChevronLeftIcon />
      </Button>
      <p>Tracking</p>
      <Image
        src={profileImage}
        alt='profile image'
        className='size-9 rounded-full'
        placeholder='blur'
      />
    </div>
    <div className='bg-white min-h-screen flex flex-col gap-9 container py-6 rounded-t-[48px]'>
      <Clock />
      <Button className='rounded-full'>Share Tracking Link</Button>
    </div>
  </div>
);

export default TrackingPage;
