import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NavUl = styled.ul`
  background-color: #f2f2f2;
  height: 90px;
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 20px;
`;

const NavLi = styled.li`
  margin: 10px;
`;

const LoginSignup = styled.div.attrs((props) => ({
  classname: props.className,
}))`
  display: flex;
  align-items: center;
`;

const Signup = styled.div.attrs((props) => ({
  classname: props.className,
}))`
  width:105px;
  background-color: white;
  padding: 10px 20px;
  border-radius: 30px;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Nav = () => {
  const user = useSelector((state) => state.loginReducer.user);
  const picture = useSelector((state) => state.profileReducer);
  const history = useHistory();
  window.localStorage.setItem('access_token', user.token);
  // window.localStorage.setItem('profile_picture', picture)
  const token = window.localStorage.getItem('access_token');
  // const profilePicture = window.localStorage.getItem('profile_picture')
  const goToProfile = () => {
    history.push('/userprofile');
  };

  return (
    <nav>
      <NavUl>
        {token ? (
          <NavLi>
            <Link to='/dashboard'>RECORD STORE</Link>
          </NavLi>
        ) : (
          <NavLi>
            <Link to='/'>RECORD STORE</Link>
          </NavLi>
        )}

        {user ? (
          <UserAvatar
            src={picture}
            className='selected-pic'
            alt='Profile Picture'
            onClick={goToProfile}
          />
        ) : (
          <LoginSignup>
            <NavLi>
              <Link to='login'>Login</Link>
            </NavLi>
            <NavLi className='signup'>
              <Signup>
                <Link to='signUp'>Sign up</Link>
              </Signup>
            </NavLi>
          </LoginSignup>
        )}
      </NavUl>
    </nav>
  );
};

export default Nav;
