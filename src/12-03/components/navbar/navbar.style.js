import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarDiv = styled.div`
  padding-inline: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  padding-block: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  border-bottom: 3px solid transparent;
  transition: 0.2s linear;

  :hover {
    color: #46a358;
  }

  &.active {
    border-bottom: 3px solid #46a358;
    color: #46a358;
  }
`;
