import styled from "styled-components";
import { ExternalLink } from "react-external-link";

export const Buttonele = styled(ExternalLink)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010106")};
Link:"https://github.com/Taranna"
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff ")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  flex: 1 0 61%;  /* flex-grow, flex-shrink, flex-basis */
  margin: 2px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  grid-column: span 2;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
