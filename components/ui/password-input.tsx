import {
  forwardRef,
  useEffect,
  useState,
  type InputHTMLAttributes,
  type SetStateAction,
} from 'react';

import { EyeIcon } from '#/components/icons/eye';
import { EyeOffIcon } from '#/components/icons/eye-off';

import { cn } from '#/lib/utils';

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  // eslint-disable-next-line react/require-default-props
  reveal?: boolean;
  // eslint-disable-next-line react/require-default-props
  setReveal?: (value: SetStateAction<boolean>) => void;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      reveal: propsReveal = false,
      setReveal: propsSetReveal,
      ...props
    },
    ref
  ) => {
    const [reveal, setReveal] = useState(propsReveal);

    useEffect(() => {
      setReveal(propsReveal);
    }, [propsReveal]);

    return (
      <div className='relative'>
        <input
          type={reveal ? 'text' : 'password'}
          className={cn(
            'flex h-[52px] w-full rounded-md border border-input bg-background p-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          type='button'
          className='absolute right-4 top-1/2 -translate-y-1/2'
          onClick={() => {
            if (propsSetReveal) {
              propsSetReveal((prev) => !prev);
            } else {
              setReveal(!reveal);
            }
          }}
        >
          {reveal ? (
            <EyeIcon className='size-5' />
          ) : (
            <EyeOffIcon className='size-5' />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
