"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function EducationPillar({
  imageName = "brightminds_logo_1.jpeg",
  text = "test",
  modalText = "test",
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`min-w-[250px] min-h-[250px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] flex flex-col items-center justify-between rounded-xl p-2 ml-2 mr-2`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`bg-primary-blue absolute min-w-[250px] min-h-[250px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] ${
          isHover ? "" : "hidden"
        } text-white p-2 rounded-lg`}
      >
        {modalText}
      </div>
      <img
        src={`/${imageName}`}
        className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]"
        alt={""}
      />
      <h1 className="font-bold w-auto text-center h-[80px] md:h-[90px] xl:text-2xl mb-0 text-[24px]">
        {text}
      </h1>
    </div>
  );
}

export default EducationPillar;
