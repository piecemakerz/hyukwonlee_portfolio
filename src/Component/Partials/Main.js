import React from "react";
import styled, { keyframes } from "styled-components";

import { MAIN_IMG } from "../../Assets";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const ImgContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.url});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
`;

const typing = (isLast) => keyframes`
    0% { 
        border-right: 0.15em solid orange;
        width: 0;   
    }
    0.01% {
        opacity: 1;
    }
    99.99%{
        border-right: 0.15em solid orange;
    }
    100%{
        border-right: ${isLast ? "0.15em solid orange" : 0};
        width: 100%;
        opacity: 1;
    }
`;

const blinkcaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: orange; }
`;

const TypeWriterWrapper = styled.div``;

const TypeWriter = styled.h1`
  position: relative;
  color: white;
  font-size: 3.5vw;
  font-weight: 600;
  margin: 0 auto;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: pre; /* Keeps the content on a single line */
  letter-spacing: 0.3vw;
  animation: ${typing(false)} 3s steps(30, end) forwards,
    ${blinkcaret} 0.75s step-end infinite;

  @media only screen and (min-width: 1600px) {
    font-size: 56px;
    letter-spacing: 4.8px;
  }
`;

const TypeWriter2 = styled(TypeWriter)`
  margin-top: 2vw;
  opacity: 0;
  animation: ${typing(true)} 1.5s steps(15, end) forwards,
    ${blinkcaret} 0.75s step-end infinite;
  animation-delay: 3.1s;
`;

export default () => {
  return (
    <>
      <ImgContainer url={MAIN_IMG} />
      <MainContainer>
        <TypeWriterWrapper>
          <TypeWriter>안녕하세요. 언제나 발전하기 위해 노력하는</TypeWriter>
        </TypeWriterWrapper>
        <TypeWriterWrapper>
          <TypeWriter2>개발자 이혁원입니다.</TypeWriter2>
        </TypeWriterWrapper>
      </MainContainer>
    </>
  );
};
