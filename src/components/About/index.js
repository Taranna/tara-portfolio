import React from "react";
import { Button } from "../ButtonElement";
import Icon1 from "../../images/img2.svg";
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
  Img,
  SILinks,
} from "./AboutEle";

const About = ({
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
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headLine} </Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
                <BtnWrap>
                  <SILinks>
                    <a target="_blank" href="https://github.com/Taranna">
                      GITHUB
                    </a>
                  </SILinks>
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

export default About;
