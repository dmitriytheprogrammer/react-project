import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  DOWNLOAD_ROUTE,
  HOME_ROUTE,
  ORDER_ROUTE,
  PAGINATION_ROUTE,
} from "../routes/configs";
import { useAuth } from "../hooks/useAuth";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
const Navigation = styled.nav`
  height: max-content;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.button`
  color: --text-color;
  width: 150px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 70px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };
  const { changeTheme } = useCurrentTheme();
  return (
    <header>
      <Navigation>
        <NavLink className={"link"} to={HOME_ROUTE}>
          Home
        </NavLink>
        <NavLink className={"link"} to={ABOUT_ROUTE}>
          About
        </NavLink>
        <NavLink className={"link"} to={CONTACTS_ROUTE}>
          Contacts
        </NavLink>
        <NavLink className={"link"} to={PAGINATION_ROUTE}>
          Pagination
        </NavLink>
        <NavLink className={"link"} to={DOWNLOAD_ROUTE}>
          PDF
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={ORDER_ROUTE}>
            Order
          </NavLink>
        )}
        <Button onClick={handleLogin}>{!isAuth ? "Войти" : "Выйти"}</Button>
        <ChangeThemeButton onClick={() => changeTheme()}>Change theme</ChangeThemeButton>
      </Navigation>
    </header>
  );
};
