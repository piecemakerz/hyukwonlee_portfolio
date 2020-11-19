import React, { useState } from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  padding: 1vh 1vw 1vh 0;
  cursor: pointer;
  margin: 0;
`;

const Bar = styled.div`
  width: 4vh;
  height: 0.7vh;
  margin: 0.6vh 0;
  background-color: white;
  transition: 0.4s;
`;

const Bar1 = styled(Bar)`
  transform: ${(props) =>
    props.isOpen ? "rotate(-45deg) translate(-1vh, 0.8vh)" : "none"};
`;

const Bar2 = styled(Bar)`
  opacity: ${(props) => (props.isOpen ? 0 : 1)};
`;

const Bar3 = styled(Bar)`
  transform: ${(props) =>
    props.isOpen ? "rotate(45deg) translate(-1vh,-0.9vh)" : "none"};
`;

export default React.memo(({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BarContainer
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
      {isOpen ? children : null}
    </BarContainer>
  );
});
