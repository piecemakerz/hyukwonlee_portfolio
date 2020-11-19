import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 8vw;
  height: 8vw;
  max-width: 128px;
  max-height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10%;
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1vw;
  font-weight: 600;
  margin-top: 1vh;
  @media only screen and (min-width: 1600px) {
    font-size: 16px;
  }
`;

const CardBackground = styled.div`
  width: 7vw;
  height: 7vw;
  max-width: 112px;
  max-height: 112px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10%;
`;

export default ({ name, url }) => {
  return (
    <CardContainer>
      <Card>
        <CardBackground url={url} />
      </Card>
      <Text>{name}</Text>
    </CardContainer>
  );
};
