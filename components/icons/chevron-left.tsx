import { IconProps } from './type';

export const ChevronLeftIcon = ({ fill = 'none', ...rest }: IconProps) => (
  <svg
    width='9'
    height='14'
    viewBox='0 0 9 14'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <path
      d='M7.5 12.8333L1.66667 6.99999L7.5 1.16666'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
