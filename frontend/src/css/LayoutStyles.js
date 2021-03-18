import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  margin: 0 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
