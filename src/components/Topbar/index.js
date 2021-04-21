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
          <TopbarLink to="about" onClick={toggle}>
            About
          </TopbarLink>
          <TopbarLink to="project" onClick={toggle}>
            Project
          </TopbarLink>
          <TopbarLink to="contact" onClick={toggle}>
            Contact
          </TopbarLink>
        </TopbarMenu>
        {/* <TopbtnWrap>
          {/* <TopbarRoute to="/signin" onClick={toggle}>
            Sign In
          </TopbarRoute> */}
        {/* </TopbtnWrap> */}
      </TopbarWrapper>
    </TopbarContainer>
  );
};
export default Topbar;
