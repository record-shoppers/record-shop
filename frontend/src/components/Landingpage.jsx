import recordshop from '../assets/recordshop.jpg';
import styled from 'styled-components'

const Landingpage = () => {

    const Background = styled.div`
    background: url(${recordshop}) 0% 0% no-repeat padding-box;
`;

    const Button = styled.a`
    border-radius: 2.3rem;
    background-color: #fff;
`;


    return (
        <>
            <Background>
                <Button>Illustrations by Gabriel Hollington</Button>
            </Background>
        </>
    )
}

export default Landingpage;