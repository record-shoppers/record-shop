import { Layout } from './LayoutStyles';
import { Form, Input, Button, ImageContainer } from './FormStyles';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/loginAction';
import { GetUser } from '../fetch/fetch';
import login from '../assets/login.png';

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    let user = await GetUser(data);
    console.log(user);
    dispatch(loginUser(user));
    if (user) history.push('/dashboard');
  };

  return (
    <Layout>
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
      <ImageContainer>
        <img src={login} alt='login' />
      </ImageContainer>
    </Layout>
  );
};
