import React, { useState } from "react";
import Icon1 from "../../images/img1.svg";
import Icon2 from "../../images/img2.svg";
import Icon3 from "../../images/img3.svg";
import Icon4 from "../../images/img4.svg";
import { FaHands } from "react-icons/fa";
import { Buttonele } from "../Button";

import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectH2,
  ProjectIcon,
  ProjectP,
  ProjectLink,
  ProjectLinkTitle,
  ProjectLinkItems,
  SILinks,
  ArrowForward,
  ArrowRight,
} from "./ProjectEle";

const Project = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectH1
          Link
          href="https://github.com/Taranna/Chat-Application"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
        >
          Projects
        </ProjectH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectLink>
              <ProjectLinkItems>
                <ProjectLinkTitle>Chat Application</ProjectLinkTitle>
              </ProjectLinkItems>
            </ProjectLink>

            <ProjectIcon src={Icon1} />

            <SILinks>
              <a
                target="_blank"
                href="https://github.com/Taranna/Chat-Application"
              >
                Chat App
              </a>
            </SILinks>

            <ProjectLinkTitle>Real time Chat App</ProjectLinkTitle>
          </ProjectCard>

          <ProjectCard>
            <ProjectLink>
              <ProjectLinkItems>
                <ProjectLinkTitle>SMS</ProjectLinkTitle>
              </ProjectLinkItems>
            </ProjectLink>
            <ProjectIcon src={Icon2} />

            <SILinks>
              <a
                target="_blank"
                href="https://github.com/Taranna/School_Management"
              >
                SMS
              </a>
            </SILinks>

            <ProjectLinkTitle>Managing School </ProjectLinkTitle>
          </ProjectCard>

          <ProjectCard>
            <ProjectLink>
              <ProjectLinkItems>
                <ProjectLinkTitle>Online Cart</ProjectLinkTitle>
              </ProjectLinkItems>
            </ProjectLink>
            <ProjectIcon src={Icon3} />
            <SILinks>
              <a target="_blank" href="https://github.com/Taranna/Online_Cart">
                Online Cart
              </a>
            </SILinks>

            <ProjectLinkTitle>Online shopping </ProjectLinkTitle>
          </ProjectCard>
          <ProjectCard>
            <ProjectLink>
              <ProjectLinkItems>
                <ProjectLinkTitle>Flashback</ProjectLinkTitle>
              </ProjectLinkItems>
            </ProjectLink>
            <ProjectIcon src={Icon4} />
            <SILinks>
              <a target="_blank" href="https://github.com/Taranna/Flashback">
                Flashback
              </a>
            </SILinks>

            <ProjectLinkTitle>Creating Memories</ProjectLinkTitle>
          </ProjectCard>
          <Buttonele
            Link
            href="https://github.com/Taranna/FrontEnd"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            {/* <LinkWrapper link={external_link} /> */}
            FrontEnd{hover ? <ArrowForward /> : <ArrowRight />}
          </Buttonele>

          <Buttonele
            Link
            href="https://github.com/Taranna/BackEnd"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            {/* <LinkWrapper link={external_link} /> */}
            BackEnd {hover ? <ArrowForward /> : <ArrowRight />}
          </Buttonele>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;
