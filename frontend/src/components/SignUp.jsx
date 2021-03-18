import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUser } from "../fetch/fetch";
import randomMan from "../assets/singup-img/randomMan.png";

//styled components
const Container = styled.main`
  display: flex;
  width: 100%;
`;

const Section = styled.section`
  width: 50%;
  margin: 30px auto;
  padding: 0 100px;
`;

const HeadingBold = styled.h3`
  font-size: 28px;
  line-height: 36px;
`;

const HeadingNormal = styled.h4`
  font-weight: 300;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  margin: 20px 5px;
  outline: none;
`;


const Image = styled.div`
  background: url(${randomMan});
  background-size: 100% 100%;
  height: 450px;
  width: 450px;
`;

// main component
export const SignUp = () => {
  let history = useHistory();
  const { register, handleSubmit, reset, errors} = useForm();
  
  console.log(errors);

  const onSubmit = async (formData) =>{
    const newUser = await addUser(formData)
    if(newUser) history.push("/userprofile")
    reset();
  } 

  return (
    <Container>
      <Section>
        <HeadingBold>Hurraaaaay!</HeadingBold>
        <HeadingBold>Let us know who you are!</HeadingBold>
        <HeadingNormal>We won't share info with anybody</HeadingNormal>
        <HeadingNormal>I promise</HeadingNormal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            
            <Input
              name="firstName"
              ref={register({ required: true, maxLength: 25 })}
              placeholder={errors.firstName ? "First name is required" : "First Name"}
              defaultValue="me"
              style={errors.firstName && {color:"red"}}
            />
            <Input
              name="lastName"
              ref={register({ required: true, maxLength: 25 })}
              placeholder={errors.lastName ? "Last name is required" : "Last Name"}
              defaultValue="me"
              style={errors.lastName && {color:"red"}}
            />
          </InputContainer>
          <Input
            name="email"
            ref={register({ required: true })}
            placeholder={errors.email ? "Email is required" : "Email"}
            defaultValue="me@me.me"
            style={errors.email && {color:"red"}}
          />
          <Input
            name="nickname"
            ref={register({ required: true })}
            placeholder={errors.nickname ? "Nickname is required" : "Nickname"}
            defaultValue="hahame"
            style={errors.nickname && {color:"red"}}
          />
          <Input
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder={errors.password ? "Password is required" : "Password"}
            defaultValue="01234Ab"
            style={errors.password && {color:"red"}}
          />
          <Input
            type="password"
            name="confirmPassword"
            ref={register({ required: true })}
            placeholder={errors.password ? "Confirm Password is required" : " Confirm Password"}
            defaultValue="01234Ab"
            style={errors.confirmPassword && {color:"red"}}
          />
          
          <button type="submit">Create account</button>
        </Form>
      </Section>
      <Section>
        <Image />
      </Section>
    </Container>
  );
};
