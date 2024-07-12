import { IconProps } from './type';

export const CheckIcon = ({ fill = 'none', ...rest }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill={fill}
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...rest}
  >
    <path d='M20 6 9 17l-5-5' />
  </svg>
);
