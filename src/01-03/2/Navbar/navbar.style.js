import styled from "styled-components";

export const NavbarDiv = styled.div`
  padding: 20px 100px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Item = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 600;
  position: relative;

  span {
    position: absolute;
    top: -10px;
    right: -20px;
    background-color: transparent;
    border: 2px solid #fff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
