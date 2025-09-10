import React from 'react';
import '../styles/Register.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const registerSchema = z
    .object({
      first_name: z.string().min(1, { message: 'First name is required' }),
      last_name: z.string().min(1, { message: 'Last name is required' }),
      email: z
        .string()
        .min(1, { message: 'emil is required' })
        .email({ message: 'Not vaild email' }),
      password: z
        .string()
        .min(6, { message: 'password must be at least 6 characters' }),
      confirm_password: z
        .string()
        .min(6, { message: 'confirm password must be at least 6 characters' }),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: 'password dosnt match',
      path: ['confirm_password'],
    });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data) => {
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };
    reset();
    console.log(user);
    navigate('/');
  };

  return (
    <>
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your first name"
          {...register('first_name')}
        />
        {errors.first_name && (
          <span style={{ color: 'red' }}>{errors.first_name.message}</span>
        )}
        <input
          type="text"
          placeholder="Enter your last name"
          {...register('last_name')}
        />
        {errors.last_name && (
          <span style={{ color: 'red' }}>{errors.last_name.message}</span>
        )}
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        {errors.email && (
          <span style={{ color: 'red' }}>{errors.email.message}</span>
        )}
        <input
          type="password"
          placeholder="Enter your password"
          {...register('password')}
        />
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password.message}</span>
        )}
        <input
          type="password"
          placeholder="Enter your confirm password"
          {...register('confirm_password')}
        />
        {errors.confirm_password && (
          <span style={{ color: 'red' }}>
            {errors.confirm_password.message}
          </span>
        )}
        <button type="submit" disabled={isSubmitting}>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
