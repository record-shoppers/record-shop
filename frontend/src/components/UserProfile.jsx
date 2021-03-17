import React, { useState } from "react";
import styled from 'styled-components'
import Johnlenon from "../assets/John+Lennon.jpg"
import Ghost from "../assets/Ghost.JPG"
import Melbourne from "../assets/Melbourne.JPG"
import Watchout from "../assets/watchout.jpg"
import Weirddog from "../assets/weirddog.jpg"
import WeirdPig from "../assets/weirdpig.jpg"
import WeirdPriestress from "../assets/weirdpriestess.jpg"
import Wathever from "../assets/Whatever.jpg"
import Record from "../assets/recordjpg.jpg"


export const UserProfile = ()=>{

    const Main = styled.main`
    display:flex;
    height:100%
    `

    const LeftSection = styled.div`
    width:50%`

    const RightSection = styled.div`
    background-color:#F1EFFF;
    width:50%`

    const SectionContainer =styled.div`
    margin:10% auto;
    width:70%`

    const Parag = styled.p`
    margin-top:5%`

    const NameInput = styled.div`
    input{
        width:48%;
       margin-right:10px;
    }`

    const Button = styled.button`
        float:right;`

    const ImgContainer = styled.div`
        margin-top: 10%;
        display:flex;
        img{
            margin:10px;
            border-radius:50%;
            border: 2px solid #EEA668;
        }`

    const SelectedPic = styled.div`
        width:50%;`


    const Thumbnails = styled.div`
        width:50%; 
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        gap:10px;
        button{
            padding:0;
        }
        `

    const [selPicState, setSelePicState] = useState(Johnlenon)

    const handleClick = (e)=>{
        setSelePicState(e.target.name);
    }

    console.log(selPicState);



    return(
        <Main>
        <LeftSection>
            <SectionContainer>
                <h1>Your Profile, Mr.Wasabis</h1>
                <Parag>Don't Forget to click the save button before you are gone</Parag>
            
            <form>
                <NameInput>
                    <input type="text" name="firstName" placeholder="Steve" />
                    <input type="text" name="lastName" placeholder="Steveson"/>
                </NameInput>
                <input type="email" name="email" placeholder="me@gmail.com"/>
                <input type="password" name="password" placeholder="01234"/>
                <Button>Save</Button>
            </form>
            </SectionContainer>
        </LeftSection>
        <RightSection>
            <SectionContainer>
                <h1>You can update your supa kewl profile pic</h1>
                <Parag>Omg. These are so cool. Tenk u Gabriel Hollington</Parag>
                <ImgContainer>
                    <SelectedPic>
                        <img src={selPicState} alt="ghost ilustration" className="selected-pic" width="270px"/>
                    </SelectedPic>
                   <Thumbnails>
                        <img src={Ghost} alt="ghost ilustration" className="selected-pic" width="75px"/>
                        <button onClick={handleClick} padding="0">
                            <img src={Johnlenon} alt="John Lennon illustration" width="75px" name="Johnlenon"/>
                        </button>
                        <button onClick={handleClick} padding="0">
                            <img src={Melbourne} alt="Melbourne illustration" width="75px" name="Melbourne"/>
                        </button>
                        <img src={Record} alt="Record illustration" width="75px" name="Record"/>
                        <img src={Watchout} alt="Watchout illustration" width="75px" name="Watchout"/>
                        <img src={WeirdPig} alt="Weird Pig illustration" width="75px" name="WeirdPig"/>
                        <img src={WeirdPriestress} alt="Weird Priestress illustration" width="75px" name="WeirdPriestress"/>
                        <img src={Weirddog} alt="Weird dog illustration" width="75px" name="Weirddog"/>
                        <img src={Wathever} alt="Whatever illustration" width="75px" name="Wathever"/>
                   </Thumbnails>
                </ImgContainer>
            </SectionContainer>
        </RightSection>
        </Main>
    )
}