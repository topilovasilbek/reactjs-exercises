import React from "react";
import { Outlet } from "react-router-dom";
import navbar from "../../utils/navbar.data";
import { NavbarDiv, NavbarLink } from "./navbar.style";

function Navbar(props) {
  return (
    <>
      <NavbarDiv>
        {navbar.map((item) =>
          !item.isPrivate ? (
            <NavbarLink to={item.path} key={item.id}>{item.title}</NavbarLink>
          ) : null
        )}
      </NavbarDiv>
      <Outlet />
    </>
  );
}

export default Navbar;
