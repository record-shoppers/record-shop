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
  `;

  const LeftSection = styled.div`
    width: 50%;
  `;

  const RightSection = styled.div`
    background-color: #f1efff;
    width: 50%;
  `;

  const SectionContainer = styled.div`
    margin: 10% auto;
    width: 70%;
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
      border-radius: 50%;
      border: 2px solid #eea668;
    }
  `;

  const SelectedPic = styled.div`
    width: 50%;
    img {
      width: 270px;
      height: 270px;
    }
  `;

  const Thumbnails = styled.div`
    width: 50%;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    button {
      padding: 0;
    }
    img {
      width: 75px;
      height: 75px;
    }
  `;

  const dispatch = useDispatch();
  const picture = useSelector((state) => state.profileReducer);
  const user = useSelector((state) => state.loginReducer);

  const handleClick = async (e) => {
    console.log("this is the user =>", user);
    const pic = e.target.src;
    let isUpdated = await updateAvatar(user._id, pic);
    console.log(isUpdated);
    dispatch(saveProfile(pic));
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
                alt="ghost ilustration"
                className="selected-pic"
              />
            </SelectedPic>
            <Thumbnails>
              <img
                src={Ghost}
                alt="ghost ilustration"
                className="selected-pic"
                name="Ghost"
                onClick={handleClick}
              />
              <img
                src={Johnlenon}
                alt="John Lennon illustration"
                name="Johnlenon"
                onClick={handleClick}
              />
              <img
                src={Melbourne}
                alt="Melbourne illustration"
                name="Melbourne"
                onClick={handleClick}
              />
              <img
                src={Record}
                alt="Record illustration"
                name="Record"
                onClick={handleClick}
              />
              <img
                src={Watchout}
                alt="Watchout illustration"
                name="Watchout"
                onClick={handleClick}
              />
              <img
                src={WeirdPig}
                alt="Weird Pig illustration"
                name="WeirdPig"
                onClick={handleClick}
              />
              <img
                src={WeirdPriestress}
                alt="Weird Priestress illustration"
                name="WeirdPriestress"
                onClick={handleClick}
              />
              <img
                src={Weirddog}
                alt="Weird dog illustration"
                name="Weirddog"
                onClick={handleClick}
              />
              <img
                src={Wathever}
                alt="Whatever illustration"
                name="Wathever"
                onClick={handleClick}
              />
            </Thumbnails>
          </ImgContainer>
        </SectionContainer>
      </RightSection>
    </Main>
  );
};
