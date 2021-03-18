import { useForm } from "react-hook-form";
import { addUser } from "../fetch/fetch";
import randomMan from "../assets/singup-img/randomMan.png";
import { Layout } from "./LayoutStyles";
import {
  Form,
  Input,
  InputContainer,
  Button,
  ImageContainer,
} from "./FormStyles";

export const SignUp = () => {
  const { register, handleSubmit, reset} = useForm();

  const onSubmit = async (formData) =>{
    const newUser = await addUser(formData)
    console.log(formData);
    console.log(newUser);
    reset();
  } 

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Hurraaaaay!</h1>
        <h1>Let us know who you are!</h1>
        <p>We won't share info with anybody</p>
        <p>I promise</p>
        <InputContainer>
          <Input
            name="firstName"
            ref={register({ required: true, maxLength: 25 })}
            placeholder="First Name"
            width="45%"
          />
          <Input
            name="lastName"
            ref={register({ required: true, maxLength: 25 })}
            placeholder="Last Name"
            width="48%"
          />
        </InputContainer>
        <Input
          name="email"
          ref={register({ required: true })}
          placeholder="Last Name"
        />
        <Input
          name="nickname"
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

      <ImageContainer>
        <img src={randomMan} alt="Man smoking" />
      </ImageContainer>
    </Layout>
  );
};
