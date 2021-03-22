import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Johnlenon from "../assets/John+Lennon.jpg";
import Ghost from "../assets/Ghost.JPG";
import Melbourne from "../assets/Melbourne.JPG";
import Watchout from "../assets/watchout.jpg";
import Weirddog from "../assets/weirddog.jpg";
import WeirdPig from "../assets/weirdpig.jpg";
import WeirdPriestress from "../assets/weirdpriestess.jpg";
import Wathever from "../assets/Whatever.jpg";
import Record from "../assets/recordjpg.jpg";
import { saveProfile } from "../actions/profileActions";
import { updateAvatar, updateInformation } from "../fetch/fetch";

export const UserProfile = () => {
  const Main = styled.main`
    display: flex;
    height: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const LeftSection = styled.div`
    width: 100%;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }

  `;

  const RightSection = styled.div`
    background-color: #f1efff;

    width: 100%;

  `;

  const SectionContainer = styled.div`
    margin: 10% auto;


    width: 75%;

  `;

  const Parag = styled.p`
    margin-top: 5%;
  `;

  const NameInput = styled.div`
    display: flex;
    input {
      width: 48%;
      margin-right: 10px;
    }
  `;

  const Button = styled.button`
    float: right;
    font-size: 20px;
  `;

  const ImgContainer = styled.div`
    margin-top: 10%;
    display: flex;
    img {
      margin: 10px;
    }
  `;

  const Button = styled.button`
    float: right;
    font-size: 20px;
  `;

  const ImgContainer = styled.div`
    margin-top: 10%;
    display: flex;
    img {
      margin: 10px;
      border-radius: 50%;
      border: 2px solid #eea668;
    }
     @media (max-width: 920px) {
      flex-direction: column;
    }
  `;


   

  const SelectedPic = styled.div`
    img {
      width: 220px;
      height: 220px;
    }
  `;

  const Thumbnails = styled.div`
 display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    img {
      width: 60px;
      height: 60px;
    }
  `;


  const dispatch = useDispatch();
  const picture = useSelector((state) => state.profileReducer);
  const user = useSelector((state) => state.loginReducer);
    const [selectedPic, setSelectedPic] = useState('');

  const handleClick = async (e) => {
    console.log("this is the user =>", user);
    const pic = e.target.src;
    let isUpdated = await updateAvatar(user._id, pic);
    console.log(isUpdated);
    dispatch(saveProfile(pic));
     setSelectedPic(e.target.name);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Main>
      <LeftSection>
        <SectionContainer>
          <h1>Your Profile, Mr.Wasabis</h1>
          <Parag>
            Don't Forget to click the save button before you are gone
          </Parag>

          <form onSubmit={handleSubmit}>
            <NameInput>
              <input type="text" name="firstName" placeholder="Steve" />
              <input type="text" name="lastName" placeholder="Steveson" />
            </NameInput>
            <input type="email" name="email" placeholder="me@gmail.com" />
            <input type="password" name="password" placeholder="01234" />
            <Button type="submit">Save</Button>

          </form>
        </SectionContainer>
      </LeftSection>
      <RightSection>
        <SectionContainer>
          <h1>You can update your supa kewl profile pic</h1>
          <Parag>Omg. These are so cool. Tenk u Gabriel Hollington</Parag>
          <ImgContainer>
            <SelectedPic>
              <img
                src={picture}

                alt='ghost ilustration'
                className='selected-pic'

              />
            </SelectedPic>
            <Thumbnails>
              <img
                src={Ghost}

                alt='ghost ilustration'
                name='Ghost'
                className={selectedPic === 'Ghost' ? 'active' : 'selected-pic'}
                onClick={handleClick}
              />
              <img
                src={Johnlenon}

                alt='John Lennon illustration'
                name='Johnlenon'
                className={
                  selectedPic === 'Johnlenon' ? 'active' : 'selected-pic'
                }

                onClick={handleClick}
              />
              <img
                src={Melbourne}


                alt='Melbourne illustration'
                name='Melbourne'
                className={
                  selectedPic === 'Melbourne' ? 'active' : 'selected-pic'
                }

                onClick={handleClick}
              />
              <img
                src={Record}

                alt='Record illustration'
                name='Record'
                className={selectedPic === 'Record' ? 'active' : 'selected-pic'}

                onClick={handleClick}
              />
              <img
                src={Watchout}
                alt='Watchout illustration'
                name='Watchout'
                className={
                  selectedPic === 'Watchout' ? 'active' : 'selected-pic'
                }

                onClick={handleClick}
              />
              <img
                src={WeirdPig}

                alt='Weird Pig illustration'
                name='WeirdPig'
                className={
                  selectedPic === 'WeirdPig' ? 'active' : 'selected-pic'
                }

                onClick={handleClick}
              />
              <img
                src={WeirdPriestress}

                alt='Weird Priestress illustration'
                name='WeirdPriestress'
                className={
                  selectedPic === 'WeirdPriestress' ? 'active' : 'selected-pic'
                }

                onClick={handleClick}
              />
              <img
                src={Weirddog}

                alt='Weird dog illustration'
                name='Weirddog'
                className={
                  selectedPic === 'Weirddog' ? 'active' : 'selected-pic'
                }

                onClick={handleClick}
              />
              <img
                src={Wathever}

                alt='Whatever illustration'
                name='Wathever'
                className={
                  selectedPic === 'Wathever' ? 'active' : 'selected-pic'
                }
                onClick={handleClick}
              />
            </Thumbnails>
          </ImgContainer>
        </SectionContainer>
      </RightSection>
    </Main>
  );
};
