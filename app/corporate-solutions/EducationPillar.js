import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 40%;
  height: 40%;
  margin: 0 24px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 30%;
  margin: auto;
`;

const CardContent = styled.div`
  padding: 24px;
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
