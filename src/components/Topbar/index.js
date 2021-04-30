import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopbtnWrap,
  TopbarRoute,
} from "./TopbarEle";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="home" onClick={toggle}>
            Home
          </TopbarLink>
          
          <TopbarLink to="project" onClick={toggle}>
            Project
          </TopbarLink>
          <TopbarLink to="contact" onClick={toggle}>
            Contact
          </TopbarLink>
        </TopbarMenu>
        
      </TopbarWrapper>
    </TopbarContainer>
  );
};
export default Topbar;
