import { IconProps } from './type';

export const EllipseIcon = ({ fill = 'none', ...rest }: IconProps) => (
  <svg
    width='96'
    height='96'
    viewBox='0 0 96 96'
    fill={fill}
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <path
      d='M1 48C1 73.9574 22.0426 95 48 95C73.9574 95 95 73.9574 95 48C95 22.0426 73.9574 1 48 1'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);
