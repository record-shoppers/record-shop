import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Johnlenon from '../assets/John+Lennon.jpg';
import Ghost from '../assets/Ghost.JPG';
import Melbourne from '../assets/Melbourne.JPG';
import Watchout from '../assets/watchout.jpg';
import Weirddog from '../assets/weirddog.jpg';
import WeirdPig from '../assets/weirdpig.jpg';
import WeirdPriestress from '../assets/weirdpriestess.jpg';
import Wathever from '../assets/Whatever.jpg';
import Record from '../assets/recordjpg.jpg';
import { saveProfile } from '../actions/profileActions';
import { updateAvatar, updateInformation } from "../fetch/fetch";
import { SectionContainer, LeftSection, ImgContainer, Main} from '../css/LayoutStyles';
import { Button,NameInput } from '../css/FormStyles';



  const RightSection = styled.div`
    background-color: #f1efff;

    width: 100%;
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

export const UserProfile = () => {
  
   const history = useHistory();
  const dispatch = useDispatch();
  const picture = useSelector((state) => state.profileReducer);
  const user = useSelector((state) => state.loginReducer);
  const [selectedPic, setSelectedPic] = useState('');
  const [userInformation, setUserInformation] = useState({
    firstName: "",
    lastName: "",
    email: user.user.data.email,
    password: user.user.data.password,
  });

  const changeHanler = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    const pic = e.target.src;
    let updatedAvatar = await updateAvatar(user.user.data._id, pic);
    dispatch(saveProfile(pic));
    setSelectedPic(e.target.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInformation.firstName && userInformation.lastName) {
      let updatedInformation = await updateInformation(
        user.user.data._id,
        userInformation
      );
      history.push("/dashboard");
    }
  };

  return (
    <Main>
      <LeftSection>
        <SectionContainer>
          <h1>
            Your Profile, {user.user.data.firstName} {user.user.data.lastName}
          </h1>
          <p>
            Don't Forget to click the save button before you are gone
          </p>


          <form onSubmit={handleSubmit}>
            <NameInput>
              <input
                type="text"
                name="firstName"
                placeholder={user.user.data.firstName}
                onChange={changeHanler}
                value={userInformation.firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder={user.user.data.lastName}
                onChange={changeHanler}
                value={userInformation.lastName}
              />
            </NameInput>
            <input
              type="email"
              name="email"
              placeholder={user.user.data.email}
            />
            <input
              type="password"
              name="password"
              placeholder={user.user.data.password}
            />
            <Button type="submit">Save</Button>
          </form>
        </SectionContainer>
      </LeftSection>
      <RightSection>
        <SectionContainer>
          <h1>You can update your supa kewl profile pic</h1>
          <p>Omg. These are so cool. Tenk u Gabriel Hollington</p>
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
                name="Ghost"
                className={selectedPic === "Ghost" ? "active" : "selected-pic"}
                onClick={handleClick}
              />
              <img
                src={Johnlenon}
                alt="John Lennon illustration"
                name="Johnlenon"
                className={
                  selectedPic === "Johnlenon" ? "active" : "selected-pic"
                }
                onClick={handleClick}
              />
              <img
                src={Melbourne}
                alt="Melbourne illustration"
                name="Melbourne"
                className={
                  selectedPic === "Melbourne" ? "active" : "selected-pic"
                }
                onClick={handleClick}
              />
              <img
                src={Record}
                alt="Record illustration"
                name="Record"
                className={selectedPic === "Record" ? "active" : "selected-pic"}
                onClick={handleClick}
              />
              <img
                src={Watchout}
                alt="Watchout illustration"
                name="Watchout"
                className={
                  selectedPic === "Watchout" ? "active" : "selected-pic"
                }
                onClick={handleClick}
              />
              <img
                src={WeirdPig}
                alt="Weird Pig illustration"
                name="WeirdPig"
                className={
                  selectedPic === "WeirdPig" ? "active" : "selected-pic"
                }
                onClick={handleClick}
              />
              <img
                src={WeirdPriestress}
                alt="Weird Priestress illustration"
                name="WeirdPriestress"
                className={
                  selectedPic === "WeirdPriestress" ? "active" : "selected-pic"
                }
                onClick={handleClick}
              />
              <img
                src={Weirddog}
                alt="Weird dog illustration"
                name="Weirddog"
                className={
                  selectedPic === "Weirddog" ? "active" : "selected-pic"
                }
                onClick={handleClick}
              />
              <img
                src={Wathever}
                alt="Whatever illustration"
                name="Wathever"
                className={
                  selectedPic === "Wathever" ? "active" : "selected-pic"
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
