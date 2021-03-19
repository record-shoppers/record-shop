import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addUser } from '../fetch/fetch';
import randomMan from '../assets/singup-img/randomMan.png';
import { Layout } from '../css/LayoutStyles';

import {
  Form,
  Input,
  InputContainer,
  Button,
  ImageContainer,
} from '../css/FormStyles';
import { useState } from 'react';

export const SignUp = () => {
  let history = useHistory();
  const { register, handleSubmit, reset, errors } = useForm();

  const [matchingPassword, setMatchingPassword] = useState('');

  const onSubmit = async (formData) => {
    if (formData.password === formData.confirmPassword) {
      const newUser = await addUser(formData);
      if (newUser) history.push('/userprofile');
      reset();
    } else {
      setMatchingPassword(false);
    }
    console.log(matchingPassword);
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Hurraaaaay!</h1>
        <h1>Let us know who you are!</h1>
        <p>We won't share info with anybody</p>
        <p>I promise</p>
        <InputContainer>
          <Input
            name='firstName'
            ref={register({ required: true, maxLength: 25 })}
            placeholder={
              errors.firstName ? 'First name is required' : 'First Name'
            }
            defaultValue='me'
            style={errors.firstName && { color: 'red' }}
          />
          <Input
            name='lastName'
            ref={register({ required: true, maxLength: 25 })}
            placeholder={
              errors.lastName ? 'Last name is required' : 'Last Name'
            }
            defaultValue='me'
            style={errors.lastName && { color: 'red' }}
          />
        </InputContainer>
        <Input
          name='email'
          ref={register({ required: true })}
          placeholder={errors.email ? 'Email is required' : 'Email'}
          defaultValue='me@me.me'
          style={errors.email && { color: 'red' }}
        />
        <Input
          name='nickname'
          ref={register({ required: true })}
          placeholder={errors.nickname ? 'Nickname is required' : 'Nickname'}
          defaultValue='hahame'
          style={errors.nickname && { color: 'red' }}
        />
        <Input
          type='password'
          name='password'
          ref={register({ required: true })}
          placeholder={errors.password ? 'Password is required' : 'Password'}
          defaultValue='01234Ab'
          style={errors.password && { color: 'red' }}
        />
        <Input
          type='password'
          name='confirmPassword'
          ref={register({ required: true })}
          placeholder={
            errors.password
              ? 'Confirm Password is required'
              : ' Confirm Password'
          }
          defaultValue='01234Ab'
          style={errors.confirmPassword && { color: 'red' }}
        />
        <Button type='submit'>Create account</Button>
        {matchingPassword === false && (
          <p style={{ color: 'red' }}>Passwords do not match</p>
        )}
      </Form>

      <ImageContainer>
        <img src={randomMan} alt='Man smoking' />
      </ImageContainer>
    </Layout>
  );
};
