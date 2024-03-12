import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import "./CourseCard.scss";

const CourseCard = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col justify-center min-w-56 max-w-56 min-h-56 max-h-56 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition-transform duration-300 hover:scale-105 mx-4 mb-4"
      onClick={() => setIsOpen(true)}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={icon} width={124} height={124} alt={title} />
        <h5 className="text-xl font-semibold mt-4 text-center items-start">
          {title}
        </h5>
      </div>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <button
          className="absolute top-0 right-0 m-4"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </Modal>
    </div>
  );
};

export default CourseCard;
