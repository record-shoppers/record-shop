import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const Title = styled.h1`
  font-size: 80px;
  color: blue;
`;

const GoBackButton = styled.button`
  margin-top: 4%;
`;

export const NotFound404 = () => {
  const history = useHistory();

  return (
    <Main>
      <Title>404</Title>
      <h2>OOPS! Page Not Found</h2>
      <GoBackButton type='button' onClick={() => history.push('/')}>
        Go Back
      </GoBackButton>
    </Main>
  );
};
