import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./CourseCard.scss";

const CourseCard = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".modal-content")) {
      setIsOpen(false);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div
        className="flex flex-col justify-center min-w-56 max-w-56 min-h-56 max-h-56 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition-transform duration-300 hover:scale-105 mx-4 mb-4"
        onClick={toggleModal}
      >
        <div className="flex flex-col items-center justify-center">
          <Image src={icon} width={124} height={124} alt={title} />
          <h5 className="text-xl font-semibold mt-4 text-center items-start">
            {title}
          </h5>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-8 sm:p-4 md:p-4 rounded-lg w-[80%] h-[80%] sm:w-[50%] sm:h-[60%] md:h-[70%] overflow-y-auto relative">
            <div className="flex justify-center mb-4 mt-8">
              <Image src={icon} width={200} height={200} alt={title} />
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-semibold my-4 relative text-center">
                {title}
              </h2>
              <button
                className="flex absolute top-4 right-4 sm:m-0 md:m-0 text-gray-400 hover:text-gray-700 cursor-pointer"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
            <p className="text-gray-700 text-justify">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
