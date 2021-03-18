import styled from "styled-components";
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
  const { register, handleSubmit, reset} = useForm();

  const onSubmit = async (formData) =>{
    const newUser = await addUser(formData)
    console.log(formData);
    console.log(newUser);
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
              placeholder="First Name"
            />
            <Input
              name="lastName"
              ref={register({ required: true, maxLength: 25 })}
              placeholder="Last Name"
            />
          </InputContainer>
          <Input
            name="email"
            ref={register({ required: true })}
            placeholder="Email"
          />
          <Input
            name="nickname"
            ref={register({ required: true })}
            placeholder="Nickname"
          />
          <Input
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
          <Input
            type="password"
            name="confirmPassword"
            ref={register({ required: true })}
            placeholder="Repeat password"
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
