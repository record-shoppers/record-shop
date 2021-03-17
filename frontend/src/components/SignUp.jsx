import styled from "styled-components";
import { useForm } from "react-hook-form";

//styled components
const Container = styled.main`
  display: flex;
  width: 100%;
`;

const Section = styled.section`
  width: 50%;
  margin: 30px auto;
  padding: 0 80px;
`;

const HeadingBold = styled.h3``;

const HeadingNormal = styled.h4``;

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="firstName"
            ref={register({ required: true, maxLength: 25 })}
            placeholder="First Name"
          />
          <input
            name="lastName"
            ref={register({ required: true, maxLength: 25 })}
            placeholder="Last Name"
          />
          <input
            name="email"
            ref={register({ required: true })}
            placeholder="Last Name"
          />
          <input
            name="nickName"
            ref={register({ required: true })}
            placeholder="Nickname"
          />
          <input
            name="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
          <input
            name="confirmPassword"
            ref={register({ required: true })}
            placeholder="Repeat password"
          />
          <input type="submit" />
        </form>
      </Section>
      <Section>
        <h2>I am an image</h2>
      </Section>
    </Container>
  );
};
