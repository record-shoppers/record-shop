import styled from "styled-components";
import { useForm } from "react-hook-form";
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

const Button = styled.button``;

const Image = styled.div`
  background: url(${randomMan});
  background-size: 100% 100%;
  height: 450px;
  width: 450px;
`;

// main component
export const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
            placeholder="Last Name"
          />
          <Input
            name="nickName"
            ref={register({ required: true })}
            placeholder="Nickname"
          />
          <Input
            name="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
          <Input
            name="confirmPassword"
            ref={register({ required: true })}
            placeholder="Repeat password"
          />
          <Button type="submit">Create account</Button>
        </Form>
      </Section>
      <Section>
        <Image />
      </Section>
    </Container>
  );
};
