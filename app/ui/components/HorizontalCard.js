import React from "react";
import Image from "next/image";

const HorizontalCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="bg-white mx-4 my-3 sm:min-w-[500px] sm:min-h-52 md:max-w-[500px] lg:max-w-[500px] md:min-h-50 lg:min-h-53 border border-gray-200 rounded-[16px] lg:rounded-[16px] p-4 flex items-center sm:flex-col md:flex-row lg:flex-row">
      <Image src={imageUrl} width={140} height={140} className="rounded-full" />
      <div className="ml-4">
        <div className="flex text-gray-900 font-bold text-xl mb-2 sm:justify-center md:justify-start lg:justify-start">
          {title}
        </div>
        <p className="text-gray-700 text-base sm:text-center md:text-start lg:text-start">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;
