import React, { useState } from "react";
import styled from "styled-components";
import Search from "../../assets/images/search.png";

const GoogleSearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Hero>
      <SearchBox>
        <GoogleIcon src={Search} alt="search" onClick={handleToggle} />
        <Input type="text" placeholder="Search..." isOpen={isOpen} />
      </SearchBox>
    </Hero>
  );
};

export default GoogleSearchInput;

const Hero = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  border-radius: 2px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 414px;
  /* transition: all 0.3s ease; */
`;

const GoogleIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 16px;
  color: #5a5757;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  border: 0;
  padding: ${({ isOpen }) => (isOpen ? "12px 30px" : "0")};
  background: transparent;
  outline: none;
  transition: all 0.5s ease;
`;
