import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 95%;
  min-height: 460px;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  overflow-y: hidden;
  border-color: "#fafafa";
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CardImage = styled.img`
  width: 30%;
  margin: auto;
`;

const CardContent = styled.div`
  padding: 16px;
  background-color: white;
  text-align: justify;
`;

const CardTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

function EducationPillar({
  imageName = "brightminds_logo_1.jpeg",
  text = "test",
  modalText = "test",
}) {
  return (
    <CardContainer>
      <CardImage src={`/${imageName}`} alt="" />
      <CardContent>
        <CardTitle>{text}</CardTitle>
        <p className="text-center">{modalText}</p>
      </CardContent>
    </CardContainer>
  );
}

export default EducationPillar;
