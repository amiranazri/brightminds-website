import React, { useState } from "react";
import Modal from "react-modal";

const CourseCard = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          <div className="text-3xl text-blue-500">{icon}</div>
          <h2 className="text-xl font-semibold ml-4">{title}</h2>
        </div>
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
    </>
  );
};

export default CourseCard;
