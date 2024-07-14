import Image from 'next/image';
import Link from 'next/link';

import { SuccessIllustration } from '#/components/icons/success';
import { buttonVariants } from '#/components/ui/button';
import { Drawer, DrawerContent } from '#/components/ui/drawer';

import { cn } from '#/lib/utils';
import onBoardBackground from '#/public/images/onboard-1.png';

const LoginSuccessPage = () => (
  <div>
    <div className='relative min-h-screen'>
      <Image
        src={onBoardBackground}
        alt='Picture of a burger'
        fill
        placeholder='blur'
        className='object-cover'
      />
      <Drawer open>
        <DrawerContent className='bg-white container min-h-[492px]'>
          <div className='flex flex-col items-center gap-8 mt-10'>
            <SuccessIllustration />
            <p className='text-2xl font-semibold'>Login Successful</p>
            <Link
              href='/tracking'
              className={cn(
                buttonVariants({ className: 'w-full rounded-full' })
              )}
            >
              Go to Tracking Screen
            </Link>
          </div>
          <button className='mt-6 text-sm font-medium text-muted'>
            Logout
          </button>
        </DrawerContent>
      </Drawer>
    </div>
  </div>
);

export default LoginSuccessPage;
