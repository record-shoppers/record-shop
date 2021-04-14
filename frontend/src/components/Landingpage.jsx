import recordshop from "../assets/recordshop.jpg";
import styled from "styled-components";

const Landingpage = () => {
  const Background = styled.div`
    background: url(${recordshop});
    background-size: 100% 100%;
    height: 90%;
  `;

  const Button = styled.a`
    border-radius: 2.3rem;
    padding: 10px;
    background-color: #fff;
    position: relative;
    top: 95%;
    left: 45%;
    font-weight: bold;
    font-size: 10px;
  `;

  return (
    <Background>
      <Button>Illustrations by Gabriel Hollington</Button>
    </Background>
  );
};

export default Landingpage;
