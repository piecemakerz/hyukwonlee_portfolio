import React from "react";
import styled from "styled-components";

import SkillCard from "./SkillCard";
import { BASIC, INTERMEDIATE } from "../../Assets";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 8vh 5vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ecf0f1;
`;

const Title = styled.h2`
  border-bottom: 0.3vw solid black;
  padding: 1vw;
  font-size: 3.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 56px;
  }
  font-weight: 600;
`;

const SubTitle = styled.h3`
  font-size: 2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 32px;
  }
  color: #2d3436;
  font-weight: 600;
  margin: 3vh 0 4vh 0;
`;

const SkillWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 1vw;
`;

const SkillCardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(4, minmax(max-content, 128px));
  grid-gap: 1vw;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillWrapper>
        <SkillContainer>
          <SubTitle>Basic Level</SubTitle>
          <SkillCardContainer>
            {BASIC.map((skill, index) => (
              <SkillCard key={index} name={skill.name} url={skill.img} />
            ))}
          </SkillCardContainer>
        </SkillContainer>
        <SkillContainer>
          <SubTitle>Intermediate Level</SubTitle>
          <SkillCardContainer>
            {INTERMEDIATE.map((skill, index) => (
              <SkillCard key={index} name={skill.name} url={skill.img} />
            ))}
          </SkillCardContainer>
        </SkillContainer>
      </SkillWrapper>
    </Container>
  );
};
