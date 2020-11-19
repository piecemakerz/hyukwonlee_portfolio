import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Zoom from "react-medium-image-zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  background-color: #ecf0f1;
  padding: 2vw;
  border-radius: 10px;
  transition: transform 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Card = styled.img`
  width: 100%;
  max-height: 40vh;
  object-fit: contain;
  margin: 0 auto;
  margin-bottom: 5vh;
  border-radius: 5px;
  align-self: flex-start;
`;

const Title = styled.div`
  font-size: 1.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  font-weight: 600;
`;

const DESC = styled.div`
  font-size: 1.2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 19.2px;
  }
  margin-bottom: 5vh;
  margin-top: 1vh;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
`;

const CloseButton = styled.button`
  position: absolute;
  left: 1vw;
  background-color: transparent;
  border: none;
  font-size: 1.5vw;
  font-weight: 600;
  cursor: pointer;
`;

const ModalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ModalTitle = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  @media only screen and (min-width: 1600px) {
    font-size: 40px;
  }
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

const Link = styled.a`
  margin-right: 1vw;
`;

const LinksTitle = styled.span`
  font-size: 1.2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 19.2px;
  }
  margin-right: 0.2vw;
`;

const ModalTitleIcon = styled(FontAwesomeIcon)`
  :hover {
    color: #3498db;
  }
  font-size: 1.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
`;

const ModalStackContainer = styled.div`
  margin: 2vh 0;
`;

const ModalStackDesc = styled.div`
  font-size: 1.5vw;
  font-weight: 600;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  margin-bottom: 1vh;
`;

const ModalStackList = styled.ul`
  font-size: 1.2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 19.2px;
  }
`;

const ModalStack = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 1vh;
`;

const StackContent = styled.div``;

const ModalDetail = styled.div`
  font-size: 1.2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 19.2px;
  }
  margin: 1.5vh 0;
  line-height: 1.2;
`;

const ModalDetailTitle = styled.div`
  font-size: 1.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  font-weight: 600;
  margin-bottom: 1vh;
`;

const ModalDetailContent = styled.span``;

const ModalContentGrid = styled.div`
  width: 100%;
  padding: 0 2vw;
  margin: 1.5vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 2vw;
  align-items: flex-start;
  font-size: 1.2vw;
  @media only screen and (min-width: 1600px) {
    font-size: 19.2px;
  }
`;

const ModalContentContainer = styled.div``;

const ModalContentTitle = styled.div`
  font-size: 1.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  font-weight: 600;
  margin-bottom: 1.5vh;
`;

const ModalContentSubtitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.5vh;
`;

const ModalContentList = styled.ul`
  list-style-type: disc;
`;

const ModalContent = styled.li`
  margin: 0.5vh 0;
  line-height: 1.2;
`;

const ImageTitle = styled.div`
  font-size: 1.5vw;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  font-weight: 600;
  margin-bottom: 2vh;
`;

const ImageContainer = styled.div`
  width: 100%;
  padding: 0 2vw;
  margin: 1.5vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 2vw;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 30vw;
  @media only screen and (min-width: 1600px) {
    font-size: 480px;
  }
`;

const customStyles = {
  content: {
    position: "relative",
    width: "85vw",
    height: "85vh",
    maxWidth: "1360px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "3vh 5vw",
    transform: "translate(-50%, -50%)",
    opacity: 1,
    zIndex: 100,
  },
};

export default React.memo(
  ({
    name,
    img,
    field,
    desc,
    detailDesc,
    images,
    content,
    links,
    turnScrollOn,
    turnScrollOff,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      turnScrollOff();
      setIsOpen(true);
    };

    const closeModal = () => {
      turnScrollOn();
      setIsOpen(false);
    };

    return (
      <>
        <CardContainer onClick={openModal}>
          <Card src={img} />
          <Title>{`${name} >`}</Title>
          <DESC>{desc}</DESC>
        </CardContainer>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          shouldFocusAfterRender={true}
          style={customStyles}
        >
          <CloseButton onClick={closeModal}>X</CloseButton>
          <ModalTitle>{name}</ModalTitle>
          <ModalLinksContainer>
            {links && Object.keys(links).length !== 0
              ? Object.keys(links).map((link, index) => (
                  <>
                    <LinksTitle>{`${link} `}</LinksTitle>
                    <Link
                      key={index}
                      href={links[link]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ModalTitleIcon
                        icon={link === "회고" ? faBlog : faGithub}
                      />
                    </Link>
                  </>
                ))
              : null}
          </ModalLinksContainer>
          <ModalStackContainer>
            <ModalStackDesc>사용 스택: </ModalStackDesc>
            <ModalStackList>
              {Object.entries(field).map((item, index) => (
                <ModalStack key={index}>
                  <StackContent>
                    {item[1].reduce((acc, val, index) => {
                      if (index === 0) {
                        acc += val;
                      } else {
                        acc += ` / ${val}`;
                      }
                      return acc;
                    }, ` [${item[0]}] `)}
                  </StackContent>
                </ModalStack>
              ))}
            </ModalStackList>
          </ModalStackContainer>
          <ModalDetail>
            <ModalDetailTitle>상세 설명: </ModalDetailTitle>
            {detailDesc.split("\n").map((line, index) => {
              if (line.length) {
                return (
                  <ModalDetailContent key={index}>
                    {line}
                    <br />
                  </ModalDetailContent>
                );
              }
              return null;
            })}
          </ModalDetail>
          <ModalContentTitle>담당 업무:</ModalContentTitle>
          <ModalContentGrid>
            {Object.keys(content).map((list, listIndex) => (
              <ModalContentContainer key={listIndex}>
                <ModalContentSubtitle>{`[${list}]`}</ModalContentSubtitle>
                <ModalContentList>
                  {content[list].map((item, itemIndex) => (
                    <ModalContent key={itemIndex}>{item}</ModalContent>
                  ))}
                </ModalContentList>
              </ModalContentContainer>
            ))}
          </ModalContentGrid>
          <ImageTitle>이미지 (클릭 시 확대됩니다):</ImageTitle>
          <ImageContainer>
            {images.map((image, index) => (
              <Zoom key={index}>
                <Image src={image} />
              </Zoom>
            ))}
          </ImageContainer>
        </Modal>
      </>
    );
  }
);
