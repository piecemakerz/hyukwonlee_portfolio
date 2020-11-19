import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ecf0f1;
  padding-bottom: 5vw;
`;

const Title = styled.h2`
  border-bottom: 0.3vw solid black;
  padding: 1.5vw;
  font-size: 3.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 56px;
  }
  font-weight: 600;
`;

const IconContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vh;
`;

const Link = styled.a``;

const Icon = styled(FontAwesomeIcon)`
  :hover {
    color: #3498db;
  }
  font-size: 5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 80px;
  }
`;

export default () => (
  <ContactContainer>
    <Title>Contact</Title>
    <IconContainer>
      <Link
        href="https://github.com/piecemakerz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={faGithub} />
      </Link>
      <Link
        href="mailto:hw3053919@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={faEnvelope} />
      </Link>
      <Link
        href="https://velog.io/@piecemaker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={faBlog} />
      </Link>
    </IconContainer>
  </ContactContainer>
);
