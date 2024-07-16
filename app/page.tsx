import Image from 'next/image';

import { onBoardingContent } from '#/lib/content';
import onBoardBackground from '#/public/images/onboard-1.png';
import { OnBoardCarousel } from '#/components/onboard-carousel';

const Home = () => (
  <div>
    <div className='relative min-h-screen flex justify-center'>
      <Image
        src={onBoardBackground}
        alt='Picture of a burger'
        fill
        placeholder='blur'
        className='object-cover'
      />
      <OnBoardCarousel items={onBoardingContent} />
    </div>
  </div>
);

export default Home;
