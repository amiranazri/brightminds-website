import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import "./PortfolioCard.css";

function PortfolioCard({ imageSrc, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative w-[200px] h-[300px] overflow-hidden flex-shrink-0 m-2">
        <Image src={imageSrc} fill objectFit="cover" />
        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <div className="w-full h-[270px] absolute z-20 flex flex-col items-center justify-end">
          <div className="text-white mb-2 text-center">{title}</div>
          <div
            onClick={openModal}
            className="text-white bg-[#19598F] hover:bg-yellow-300 hover:text-black w-[150px] p-1 cursor-pointer text-center"
          >
            READ MORE
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="p-4 sm:p-4 lg:p-8">
          <button onClick={closeModal} className="close-button">
            Close
          </button>
          {content.map((item, index) => (
            <div key={index}>
              <h4 className="mt-8">{item.heading}</h4>
              {item.paragraph && <p className="mt-2">{item.paragraph}</p>}
              {item.listItems && (
                <ul>
                  {item.listItems.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {content.map((item, index) => (
            <div key={index}>
              {item.additionalImages && (
                <div className="additional-images">
                  {item.additionalImages.map((src, idx) => (
                    <Image
                      src={src}
                      alt={`Additional Image ${idx + 1}`}
                      key={idx}
                      width={500}
                      height={300}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default PortfolioCard;
