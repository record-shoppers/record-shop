import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NavUl = styled.ul`
    background-color: #F2F2F2;
    height: 90px;
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    padding: 20px;`;

const NavLi = styled.li`
margin: 10px;`

const LoginSignup = styled.div.attrs(props=>({
    classname:props.className
}))`
    display: flex;
    align-items: center; 
`

const Signup = styled.div.attrs(props=>({
    classname:props.className
}))`
    background-color: white;
    padding: 10px 20px;
    border-radius: 30px;
`

const Nav = () =>{  
    
    return(
        <nav>
        <NavUl>
            <NavLi>
                <Link to="/" exact>RECORD STORE</Link>
            </NavLi>
            <LoginSignup>
                <NavLi>
                    {/* <Link to="login">Login</Link> */}
                </NavLi>
                <NavLi className="signup">
                    {/* <Signup><Link to="signUp">Sign up</Link></Signup> */}
                </NavLi>
            </LoginSignup>
        </NavUl>
        </nav>

    )
}

export default Nav;