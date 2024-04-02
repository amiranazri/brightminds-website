import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 90%;
  min-height: 464px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-y: hidden;
  border-weight: 4px;
  border-color: "#fafafa";
`;

const CardImage = styled.img`
  width: 60%;
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
        <p>{modalText}</p>
      </CardContent>
    </CardContainer>
  );
}

export default EducationPillar;
