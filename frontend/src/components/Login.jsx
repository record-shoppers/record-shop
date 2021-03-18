import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import login from "../assets/login.png";
import { Layout } from "./LayoutStyles";
import { Form, Input, Button, ImageContainer } from "./FormStyles";

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  //   const history = useHistory();

  const onSubmit = async (data) => {
    // const user = await addUser(data);
    // if (user) history.push('/dashboard');
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome back!!</h1>
        <p>Please fill in your credentials.</p>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true, maxLength: 6 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        <Button type="submit">Log in</Button>
        <p>
          What? You do not have an account?{" "}
          <Link to="/signup">Create one here!</Link>
        </p>
      </Form>
      <ImageContainer>
        <img src={login} alt="login" />
      </ImageContainer>
    </Layout>
  );
};
