import { useState } from "react";
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
import { updateInformation } from "../helpers/fetch";
import {
  SectionContainer,
  LeftSection,
  ImgContainer,
  Main,
} from "../css/LayoutStyles";
import { Button, NameInput } from "../css/FormStyles";
import { loginUser } from "../actions/loginAction";

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
  const dispatch = useDispatch();
  const picture = useSelector((state) => state.profileReducer);

  const user = useSelector((state) => state.loginReducer.user.user);
  const [error, setError] = useState("");
  const [selectedPic, setSelectedPic] = useState("");

  const [userInformation, setUserInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHanler = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    const pic = e.target.src;
    dispatch(saveProfile(pic));
    setSelectedPic(e.target.name);
  };

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    if (!userInformation.firstName || !userInformation.lastName) {
      setError("Use must enter and first and last name to update!");
      return;
    }

    if (
      userInformation.email !== user.email ||
      userInformation.password !== user.password
    ) {
      setError("You must enter the correct Email and Password!");
      return;
    }

    let updatedInformation = await updateInformation(user._id, userInformation);
    dispatch(loginUser(updatedInformation.data));
  };

  return (
    <Main>
      <LeftSection>
        <SectionContainer>
          <h2>
            Your Profile, {user && user.firstName} {user && user.lastName}
          </h2>
          <p>Don't Forget to click the save button before you are gone</p>

          <form onSubmit={handleSubmit}>
            {error && <span>{error}</span>}
            <NameInput>
              <input
                type="text"
                name="firstName"
                placeholder={user && user.firstName}
                onChange={changeHanler}
                value={userInformation.firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder={user && user.lastName}
                onChange={changeHanler}
                value={userInformation.lastName}
              />
            </NameInput>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={changeHanler}
              value={userInformation.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHanler}
              value={userInformation.password}
            />
            <Button type="submit">Save</Button>
          </form>
        </SectionContainer>
      </LeftSection>
      <RightSection>
        <SectionContainer>
          <h2>You can update your supa kewl profile pic</h2>
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
