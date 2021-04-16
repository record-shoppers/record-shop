import React from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { clearItemInStorage } from "../helpers/localStoreage";
import { logoutUser } from "../helpers/fetch";
import { useDispatch } from "react-redux";
import { userLogout } from "../actions/loginAction";

const DropdownContainer = styled.ul`
  background-color: white;
  position: absolute;
  width: 150px;
  top: 60px;
  right: 0;
  list-style-type: none;
  padding: 10px;
  text-align: right;
  font-weight: 400;
  box-shadow: -3px 3px 5px grey;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => props.visibility};
`;

const DropdownLi = styled.li`
  border-bottom: 1px solid black;
  padding: 5px;
  cursor: pointer;
  &:hover {
    text-shadow: -3px 3px 2px grey;
    font-weight: 600;
  }
`;

export const UserDropdown = ({ dropdown }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      const logout = await logoutUser();
      console.log("logout-->", logout);
      dispatch(userLogout());
      clearItemInStorage("order");
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {dropdown ? (
        <DropdownContainer transform="500px" opacity="1" visibility="visible">
          <Link
            to={
              location.pathname === "/userprofile"
                ? "/dashboard"
                : "/userprofile"
            }
          >
            <DropdownLi>
              {location.pathname === "/userprofile"
                ? "Dashboard"
                : "Update Profile"}
            </DropdownLi>
          </Link>
          <DropdownLi onClick={handleLogout}>Log out</DropdownLi>
        </DropdownContainer>
      ) : (
        <DropdownContainer transform="0px" opacity="0" visibility="hidden">
          <DropdownLi>Update Profile</DropdownLi>
          <DropdownLi>Log out</DropdownLi>
        </DropdownContainer>
      )}
    </>
  );
};
