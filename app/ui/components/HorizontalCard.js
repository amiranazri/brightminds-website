import React from "react";
import Image from "next/image";

const HorizontalCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="bg-white mx-4 my-3 min-w-[200px] min-h-52 sm:max-w-[224px]  md:max-w-[500px] lg:max-w-[500px] md:min-h-50 lg:min-h-53 border border-gray-200 rounded-[16px] lg:rounded-[16px] p-4 flex items-center flex-col md:flex-row lg:flex-row">
      <Image src={imageUrl} width={188} height={148} />
      <div className="ml-4 text-center sm:text-left md:text-left">
        <p className="text-gray-900 font-bold text-xl mb-2">{title}</p>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
