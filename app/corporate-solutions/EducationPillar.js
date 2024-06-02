import React from "react";
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
  @media (max-width: 600px) {
    width: 90%;
    min-height: auto;
    margin: 10px auto;
  }
`;

const CardImage = styled.img`
  width: 30%;
  margin: auto;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const CardContent = styled.div`
  padding: 16px;
  background-color: white;
  text-align: justify;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const CardTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
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
