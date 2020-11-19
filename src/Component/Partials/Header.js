import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MenuIcon from "../Partials/MenuIcon";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  height: 8vh;
  font-size: 2.5vh;
  z-index: 1;
`;

const HeaderButton = styled.div`
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  color: white;
  align-self: center;
`;

const HeaderMenuContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: white;
`;

const HeaderItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 3vh;
`;

const HeaderMenuItem = styled.div`
  all: unset;
  font-size: 2.3vh;
  margin-bottom: ${(props) => (props.showHamburger ? "3vh" : 0)};
  :active {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const HeaderSubmenuContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 30vh;
  display: flex;
  right: 0;
  flex-direction: column;
  cursor: pointer;
  font-weight: 600;
  color: white;
  margin-top: 1.8vh;
  padding: 2vh 0;
`;

const IdxToName = {
  0: "Home",
  1: "About",
  2: "Skills",
  3: "Web Project",
  4: "App Project",
  5: "Contact",
};

export default ({
  getCurrentSlideIndex,
  onNext,
  onPrev,
  scrollToSlide,
  slidesCount,
}) => {
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    if (showHamburger && window.innerWidth >= 1000) {
      setShowHamburger(false);
    } else if (!showHamburger && window.innerWidth < 1000) {
      setShowHamburger(true);
    }
  }, [window.innerWidth, window.innerHeight]);

  const renderMenuItems = () => {
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      slidesNumbers.push(
        <HeaderItemWrapper key={i}>
          <HeaderMenuItem
            showHamburger={showHamburger}
            onClick={() => scrollToSlide(i)}
          >
            {IdxToName[i]}
          </HeaderMenuItem>
        </HeaderItemWrapper>
      );
    }
    return slidesNumbers;
  };

  return (
    <HeaderContainer>
      <HeaderButton>HyukWonLee</HeaderButton>
      {!showHamburger ? (
        <HeaderMenuContainer>{renderMenuItems()}</HeaderMenuContainer>
      ) : (
        <MenuIcon>
          <HeaderSubmenuContainer>{renderMenuItems()}</HeaderSubmenuContainer>
        </MenuIcon>
      )}
    </HeaderContainer>
  );
};
