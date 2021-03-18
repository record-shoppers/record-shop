import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import login from '../assets/login.png';

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  //   const history = useHistory();

  const onSubmit = async (data) => {
    // const user = await addUser(data);
    // if (user) history.push('/dashboard');
  };

  const LoginLayout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    margin: 0 100px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-top: 40px;
    margin-right: 100px;
    outline: none;
  `;

  const Input = styled.input`
    display: flex;
    flex-direction: column;
    border: none;
    border-bottom: 1px solid black;
    margin: 30px 0;
  `;

  const Button = styled.button`
    width: 80px;
    height: 30px;
    align-self: flex-end;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    margin-bottom: 40px;
    outline: none;
  `;

  return (
    <LoginLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome back!!</h1>
        <p>Please fill in your credentials.</p>
        <Input
          name='email'
          type='text'
          placeholder='Email'
          ref={register({ required: true })}
        />
        {errors.name && errors.name.type === 'required' && (
          <span>This is required</span>
        )}
        <Input
          name='password'
          type='password'
          placeholder='Password'
          ref={register({ required: true, maxLength: 6 })}
        />
        {errors.name && errors.name.type === 'required' && (
          <span>This is required</span>
        )}
        <Button type='submit'>Log in</Button>
        <p>
          What? You do not have an account?{' '}
          <Link to='/signup'>Create one here!</Link>
        </p>
      </Form>
      <div>
        <img src={login} alt='login' />
      </div>
    </LoginLayout>
  );
};
