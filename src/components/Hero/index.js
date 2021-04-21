import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement.js";
// import LinkWrapper from "../LinkWrapper";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const external_link = "https://github.com/Taranna";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tara Mathews</HeroH1>
        <HeroP> I'm an aspiring Full Stack Web Developer</HeroP>
        <HeroBtnWrapper>
          <Button
            Link
            href="https://github.com/Taranna"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            {/* <LinkWrapper link={external_link} /> */}
            GitHub {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
