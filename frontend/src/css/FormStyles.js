import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 40px;
  margin-right: 100px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  margin: 30px 0;
  width: ${(props) => props.width};
`;

export const Button = styled.button`
  align-self: flex-end;
  margin-bottom: 40px;
`;

export const ImageContainer = styled.div`
  height: 442px;
  width: 479px;
`;
