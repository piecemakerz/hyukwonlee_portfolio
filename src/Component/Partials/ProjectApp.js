import React from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { PROJECTS_APP } from "../../Assets";

const Container = styled.div`
  padding: 8vh 5vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Title = styled.h2`
  padding: 1.5vw;
  font-size: 3.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 56px;
  }
  font-weight: 600;
  border-bottom: 0.3vw solid black;
  margin-bottom: 4vh;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  max-height: 70vh;
`;

export default ({ turnScrollOn, turnScrollOff }) => {
  return (
    <Container>
      <Title>App Project</Title>
      <ProjectContainer isReverse={true}>
        {PROJECTS_APP.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              index={index}
              turnScrollOn={turnScrollOn}
              turnScrollOff={turnScrollOff}
              {...project}
            />
          );
        })}
      </ProjectContainer>
    </Container>
  );
};
