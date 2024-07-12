'use client';

import { GoogleIcon } from '#/components/icons/google';
import { Button } from '#/components/ui/button';
import { Checkbox } from '#/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import { PasswordInput } from '#/components/ui/password-input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

const signupSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  tosAgreement: z.boolean().refine((value) => value === true, {
    message: 'You must agree to the terms of service',
  }),
});

type SignupSchema = z.infer<typeof signupSchema>;

const SignupPage = () => {
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (values: SignupSchema) => {
    console.log(values);
  };

  return (
    <div className='container py-8'>
      <div className='text-[32px] leading-10 font-semibold'>
        Creat your new account.
      </div>
      <div className='text-sm text-muted font-medium mt-2'>
        Create an account to start looking for the food you like
      </div>

      <Form {...form}>
        <form
          className='mt-8 space-y-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='space-y-[14px]'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter Email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Enter User name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder='Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='tosAgreement'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex gap-2 items-start'>
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                    />
                    <FormLabel className='-mt-1 sm:mt-0'>
                      I agree with{' '}
                      <Link
                        href='#'
                        className='text-primary'
                      >
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link
                        href='#'
                        className='text-primary'
                      >
                        Privacy Policy
                      </Link>
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full rounded-full'>Sign in</Button>
        </form>
      </Form>
      <p className='text-sm mt-8 font-medium text-muted whitespace-nowrap flex gap-4 items-center before:h-[0.5px] before:bg-muted before:w-full after:h-[0.5px] after:bg-muted after:w-full'>
        or sign in with
      </p>
      <div className='text-center'>
        <Button
          size='icon'
          variant='outline'
          className='mt-6 rounded-full'
        >
          <GoogleIcon />
        </Button>
      </div>
      <p className='text-sm font-medium text-center mt-8'>
        Have an account?{' '}
        <Link
          href='/login'
          className='text-primary'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
