import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const ligonSchmea = z.object({
    email: z
      .string()
      .min(1, { message: 'Not vaild email' })
      .email({ message: 'Not vaild email' }),
    password: z
      .string()
      .min(6, { message: 'password must be at least 6 characters' }),
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(ligonSchmea),
  });
  const onSubmit = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    reset();
    console.log(user);
    navigate('/');
  };
  return (
    <>
      <h2>sign in your account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="your email" {...register('email')} />
        {errors.email && (
          <span style={{ color: 'red' }}>{errors.email.message}</span>
        )}
        <input
          type="text"
          placeholder="your password"
          {...register('password')}
        />
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password.message}</span>
        )}
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
