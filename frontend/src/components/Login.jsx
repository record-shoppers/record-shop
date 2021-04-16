import {
  SectionContainer,
  LeftSection,
  RightSection,
  ImgContainer,
  Main,
} from "../css/LayoutStyles";
import React, { useState } from "react";
import { Button } from "../css/FormStyles";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/loginAction";
import { GetUser } from "../helpers/fetch";
import login from "../assets/login.png";

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [errorState, setErrorState] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    setErrorState("");
    try {
      let user = await GetUser(data);
      if (!user.error) {
        dispatch(loginUser(user));
        history.push("/dashboard");
      } else {
        setErrorState(user.error.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main>
      <LeftSection>
        <SectionContainer>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome back!!</h1>
            <p>Please fill in your credentials.</p>
            {errorState && <span>{errorState}</span>}
            <input
              name="email"
              type="text"
              placeholder="Email"
              ref={register({ required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <span>This is required</span>
            )}
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.password && errors.password.type === "required" && (
              <span>This is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span>Please provide min 6 charactors</span>
            )}
            <Button type="submit">Log in</Button>
          </form>
          <p>
            What? You do not have an account?{" "}
            <Link to="/signup">Create one here!</Link>
          </p>
        </SectionContainer>
      </LeftSection>
      <RightSection>
        <SectionContainer>
          <ImgContainer>
            <img src={login} alt="login" />
          </ImgContainer>
        </SectionContainer>
      </RightSection>
    </Main>
  );
};
