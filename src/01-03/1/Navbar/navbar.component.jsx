import React from "react";
import { NavbarDiv, Item } from "./navbar.style";

function Navbar({ length }) {
  return (
    <NavbarDiv>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>
        Students <span>{length}</span>
      </Item>
    </NavbarDiv>
  );
}

export default Navbar;
