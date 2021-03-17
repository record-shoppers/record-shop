import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
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
        <Router>
        <nav>
        <NavUl>
            <NavLi>
                <NavLink to="/">RECORD STORE</NavLink>
            </NavLi>
            <LoginSignup>
                <NavLi>
                    <NavLink to="login">Login</NavLink>
                </NavLi>
                <NavLi className="signup">
                    <Signup><NavLink to="signUp">Sign up</NavLink></Signup>
                </NavLi>
            </LoginSignup>
        </NavUl>
        </nav>
      </Router>
    )
}

export default Nav;