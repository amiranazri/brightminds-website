import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import "./PortfolioCard.css";

function PortfolioCard({
  imageSrc,
  title,
  content = [],
  additionalImages = [],
  isComingSoon = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative w-[200px] h-[300px] overflow-hidden flex-shrink-0 m-4">
        {imageSrc ? (
          <Image src={imageSrc} fill objectFit="cover" />
        ) : (
          <div className="bg-black"></div>
        )}
        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <div className="w-full h-[270px] absolute z-20 flex flex-col items-center justify-end">
          <div className="text-white mb-2 text-center">{title}</div>
          {isComingSoon ? (
            <div className="text-white bg-[#19598F] w-[150px] p-1 cursor-not-allowed text-center">
              COMING SOON
            </div>
          ) : (
            <div
              onClick={openModal}
              className="text-white bg-[#19598F] hover:bg-yellow-300 hover:text-black w-[150px] p-1 cursor-pointer text-center"
            >
              READ MORE
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="p-4 sm:p-4 lg:p-8 modal-content">
          <button onClick={closeModal} className="close-button">
            Close
          </button>
          {content.map((item, index) => (
            <div key={index} className="modal-text">
              <h4 className="mt-8">{item.heading}</h4>
              {index === 0 && additionalImages[0] && (
                <Image
                  src={additionalImages[0]}
                  alt={`Additional Image ${index + 1}`}
                  className="float-image-right"
                  width={500}
                  height={500}
                />
              )}
              {item.paragraph && <p className="mt-2">{item.paragraph}</p>}
              {item.listItems && (
                <ul>
                  {item.listItems.map((li, idx) => (
                    <li key={idx}>
                      <span className="font-bold">{li.title}</span>
                      <span>{li.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="additional-images">
            {additionalImages.slice(1).map((item, index) => (
              <Image
                src={item}
                alt={`Additional Image ${index + 2}`}
                key={index}
                className="additional-image"
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PortfolioCard;
