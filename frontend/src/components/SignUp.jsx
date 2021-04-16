import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUser } from "../helpers/fetch";
import randomMan from "../assets/singup-img/randomMan.png";
import {
  SectionContainer,
  LeftSection,
  RightSection,
  ImgContainer,
  Main,
} from "../css/LayoutStyles";
import { Button, NameInput } from "../css/FormStyles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/loginAction";

export const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, errors } = useForm();

  const [matchingPassword, setMatchingPassword] = useState("");

  const onSubmit = async (formData) => {
    if (formData.password === formData.confirmPassword) {
      const newUser = await addUser(formData);
      dispatch(loginUser(newUser.data));
      if (newUser) history.push("/userprofile");
      reset();
    } else {
      setMatchingPassword(false);
    }
  };

  return (
    <Main>
      <LeftSection>
        <SectionContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Hurraaaaay!</h2>
            <h2>Let us know who you are!</h2>
            <p>We won't share info with anybody. I promise</p>
            <NameInput>
              <input
                name="firstName"
                ref={register({ required: true, maxLength: 25 })}
                placeholder={
                  errors.firstName ? "First name is required" : "First Name"
                }
                style={errors.firstName && { color: "red" }}
              />
              <input
                name="lastName"
                ref={register({ required: true, maxLength: 25 })}
                placeholder={
                  errors.lastName ? "Last name is required" : "Last Name"
                }
                style={errors.lastName && { color: "red" }}
              />
            </NameInput>
            <input
              name="email"
              ref={register({ required: true })}
              placeholder={errors.email ? "Email is required" : "Email"}
              style={errors.email && { color: "red" }}
            />
            <input
              name="nickname"
              ref={register({ required: true })}
              placeholder={
                errors.nickname ? "Nickname is required" : "Nickname"
              }
              style={errors.nickname && { color: "red" }}
            />
            <input
              type="password"
              name="password"
              ref={register({ required: true })}
              placeholder={
                errors.password ? "Password is required" : "Password"
              }
              style={errors.password && { color: "red" }}
            />
            <input
              type="password"
              name="confirmPassword"
              ref={register({ required: true })}
              placeholder={
                errors.password
                  ? "Confirm Password is required"
                  : " Confirm Password"
              }
              style={errors.confirmPassword && { color: "red" }}
            />
            <Button type="submit">Create account</Button>
            {matchingPassword === false && (
              <p style={{ color: "red" }}>Passwords do not match</p>
            )}
          </form>
        </SectionContainer>
      </LeftSection>

      <RightSection>
        <SectionContainer>
          <ImgContainer>
            <img src={randomMan} alt="Man smoking" />
          </ImgContainer>
        </SectionContainer>
      </RightSection>
    </Main>
  );
};
