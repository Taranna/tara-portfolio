import React, { useState } from "react";
import { Buttonele } from "../Button";
import Icon1 from "../../images/img1.svg";
import Video from "../../videos/video.mp4";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  ImageIcon,
  // Img,
  // SILinks,
  // SIL,
  HeroBg,
  VideoBg,
  ArrowForward,
  ArrowRight,
} from "./InfoEle";

const InfoSection = ({
  imgStart,
  lightBg,
  darkText,
  buttonLabel,
  id,
  img,
  alt,
  lightText,
  topLine,
  headLine,
  description,
  primary,
  dark,
  dark2,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          </HeroBg>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headLine} </Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
                <BtnWrap>
                  <Buttonele
                    Link
                    href="mailto:mtara3066@gmail.com"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                  >
                    {/* <LinkWrapper link={external_link} /> */}
                    E-Mail {hover ? <ArrowForward /> : <ArrowRight />}
                  </Buttonele>
                  {/* <SILinks>
                    <a target="_blank" href="mailto:mtara3066@gmail.com">
                      EMAIL
                    </a>
                  </SILinks> */}
                </BtnWrap>
                <BtnWrap>
                  <Buttonele
                    Link
                    href="https://github.com/Taranna"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                  >
                    {/* <LinkWrapper link={external_link} /> */}
                    GitHub {hover ? <ArrowForward /> : <ArrowRight />}
                  </Buttonele>
                  {/* <SIL>
                    <a target="_blank" href="https://github.com/Taranna">
                      GITHUB
                    </a>
                  </SIL> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                {/* <Img src={img} alt={alt} /> */}
                <ImageIcon src={Icon1} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
