import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { UserDropdown } from "./UserDropdown";

const NavUl = styled.ul`
  background-color: #f2f2f2;
  height: 60px;
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
  width: 105px;
  background-color: white;
  padding: 10px 20px;
  border-radius: 30px;
`;

const UserSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const ShoppingCart = styled.div`
  position: relative;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemQuantity = styled.div`
  position: absolute;
  top: -5px;
  right: -2px;
  background-color: orange;
  color: white;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  font-size: 10px;
  text-align: center;
`;

const Nav = () => {
  const user = useSelector((state) => state.loginReducer.user);
  const picture = useSelector((state) => state.profileReducer);
  const basketItems = useSelector((state) => state.basketReducer.records);

  const [dropdown, setDropdown] = useState(false);

  const handleAvatarClick = () => {
    setDropdown(!dropdown);
  };

  const getRecordQaunity = (records) => {
    try {
      return (
        records.reduce((acc, record) => {
          return (acc += record.qty);
        }, 0) || 0
      );
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  return (
    <nav>
      <NavUl>
        {user ? (
          <NavLi>
            <Link to="/dashboard">RECORD STORE</Link>
          </NavLi>
        ) : (
          <NavLi>
            <Link to="/">RECORD STORE</Link>
          </NavLi>
        )}

        {user ? (
          <UserSelection>
            <Link to="basket">
              <ShoppingCart>
                <MdShoppingCart />
                <ItemQuantity>{getRecordQaunity(basketItems)}</ItemQuantity>
              </ShoppingCart>
            </Link>
            <UserAvatar
              src={picture}
              className="selected-pic"
              alt="Profile Picture"
              onClick={handleAvatarClick}
            />
            <UserDropdown dropdown={dropdown} />
          </UserSelection>
        ) : (
          <LoginSignup>
            <NavLi>
              <Link to="login">Login</Link>
            </NavLi>
            <NavLi className="signup">
              <Signup>
                <Link to="signUp">Sign up</Link>
              </Signup>
            </NavLi>
          </LoginSignup>
        )}
      </NavUl>
    </nav>
  );
};

export default Nav;
