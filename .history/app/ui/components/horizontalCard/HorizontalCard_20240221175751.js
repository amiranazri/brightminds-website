import React from "react";
import Image from "next/image";

const HorizontalCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal items-center">
      <Image src={imageUrl} width={120} height={120} />
      <div className="mb-8">
        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
