import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./CourseCard.scss";

const CourseCard = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("Closing modal");
    console.log("Is Open?", isOpen);
  };

  return (
    <div
      className="flex flex-col justify-center min-w-56 max-w-56 min-h-56 max-h-56 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition-transform duration-300 hover:scale-105 mx-4 mb-4"
      onClick={openModal}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={icon} width={124} height={124} alt={title} />
        <h5 className="text-xl font-semibold mt-4 text-center items-start">
          {title}
        </h5>
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute inset-0 overflow-auto bg-gray-900 bg-opacity-75 flex justify-center items-center"
        contentLabel="Modal"
      >
        <div className="bg-white p-8 rounded-lg w-[70%] h-[70%] sm:w-[50%] sm:h-[50%] overflow-y-auto relative">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <button
              className="flex  m-4 text-gray-400 hover:text-gray-700 cursor-pointer"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default CourseCard;
