import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addUser } from '../fetch/fetch';
import randomMan from '../assets/singup-img/randomMan.png';
import { SectionContainer, LeftSection, RightSection, ImgContainer, Main} from '../css/LayoutStyles';
import {Button,NameInput} from '../css/FormStyles';
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
    <Main>
      <LeftSection>
        <SectionContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Hurraaaaay!</h1>
            <h1>Let us know who you are!</h1>
            <p>We won't share info with anybody</p>
            <p>I promise</p>
            <NameInput>
              <input
                name='firstName'
                ref={register({ required: true, maxLength: 25 })}
                placeholder={
                  errors.firstName ? 'First name is required' : 'First Name'
                }
                defaultValue='me'
                style={errors.firstName && { color: 'red' }}
              />
              <input
                name='lastName'
                ref={register({ required: true, maxLength: 25 })}
                placeholder={
                  errors.lastName ? 'Last name is required' : 'Last Name'
                }
                defaultValue='me'
                style={errors.lastName && { color: 'red' }}
              />
            </NameInput>
            <input
              name='email'
              ref={register({ required: true })}
              placeholder={errors.email ? 'Email is required' : 'Email'}
              defaultValue='me@me.me'
              style={errors.email && { color: 'red' }}
            />
            <input
              name='nickname'
              ref={register({ required: true })}
              placeholder={errors.nickname ? 'Nickname is required' : 'Nickname'}
              defaultValue='hahame'
              style={errors.nickname && { color: 'red' }}
            />
            <input
              type='password'
              name='password'
              ref={register({ required: true })}
              placeholder={errors.password ? 'Password is required' : 'Password'}
              defaultValue='01234Ab'
              style={errors.password && { color: 'red' }}
            />
            <input
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
          </form>
        </SectionContainer>
      </LeftSection>

      <RightSection>
        <SectionContainer>
          <ImgContainer>
            <img src={randomMan} alt='Man smoking' />
          </ImgContainer>
        </SectionContainer>
      </RightSection>
    </Main>
  );
};
