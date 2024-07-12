'use client';

import { GoogleIcon } from '#/components/icons/google';
import { Button } from '#/components/ui/button';
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
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const onSubmit = (values: LoginSchema) => {
    console.log(values);
    router.push('/login-success');
  };

  return (
    <div className='container py-8'>
      <div className='text-[32px] leading-10 font-semibold'>
        Login to your account.
      </div>
      <div className='text-sm text-muted font-medium mt-2'>
        Please sign in to your account
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
          <div className='text-right'>
            <Link
              href='#'
              className='text-primary text-sm font-medium'
            >
              Forgot password?
            </Link>
          </div>
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
        Don&apos;t have an account?{' '}
        <Link
          href='/signup'
          className='text-primary'
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
