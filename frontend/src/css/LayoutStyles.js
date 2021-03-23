import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    height: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

export const LeftSection = styled.div`
    width: 100%;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
`;

export const RightSection = styled.div`
  width: 100%;
`;

export const SectionContainer = styled.div`
  margin: 10% auto;
  width: 75%;
`;

export const ImgContainer = styled.div`
  margin-top: 10%;
  display: flex;
  img {
    margin: 10px;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;