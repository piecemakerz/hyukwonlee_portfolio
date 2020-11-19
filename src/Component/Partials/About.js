import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5vh 10vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Title = styled.h2`
  font-size: 3.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 56px;
  }
  font-weight: 600;
  padding: 10px;
  border-bottom: 3px solid black;
  margin-bottom: 3vh;
`;

const SubTitle = styled.h3`
  font-size: 2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 32px;
  }
  color: #2d3436;
  font-weight: 600;
  margin-bottom: 5vh;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  font-size: 1.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 10px;
`;

export default () => {
  return (
    <Container>
      <Title>About</Title>
      <Content>
        <SubTitle>"끊임없이 새로움을 꿈꾸는 개발자가 되고 싶습니다"</SubTitle>
        대학교에서 소프트웨어를 전공하며 많은 프로그래밍 언어들과 분야들을
        접해보았고, 그 중 가장 나중에 접한 자바스크립트라는 언어의 매력에 빠져
        프론트엔드 개발자의 길을 걷게 되었습니다. 2020년 3월 이후로 프론트엔드
        개발자로 활동하고 있으며 더 나은 개발자가 되기 위해 끊임 없이 노력하고
        있습니다.
        <br />
        <br />
        저는 본인에게 익숙한 기술들만을 계속해서 사용하는 기계적인 개발자에서
        벗어나, 새로운 기술들을 실제로 적용해보며 계속해서 성장해나가는{" "}
        '행동하는' 개발자가 되고자 노력합니다. 또한, 함께 작업할 때 소통이 잘
        되는 개발자를 좋아하고 저 스스로가 소통을 잘하는 개발자가 될 수 있도록
        항상 의식하며 노력 중입니다.
        <br />
        <br />
        저는 '자바스크립트라는 언어의 끝을 보자'라는 목표를 위해 오늘도 배움을
        계속해 나가고 있습니다. 배움을 위해서라면 절대 개인적인 자존심을
        내세우지 않으며, 항상 배우는 자세로 배움 그 자체를 추구하고자 항상
        스스로에게 다짐하고 있습니다.
      </Content>
    </Container>
  );
};
