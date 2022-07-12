import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements.js";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prev) => !prev);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            {/* <NavIcon /> */}
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Aout Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Products</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
