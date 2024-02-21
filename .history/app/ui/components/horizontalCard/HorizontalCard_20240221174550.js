import React from "react";
import Image from 'next/image'

const HorizontalCard = ({ imageUrl, title, subtitle }) => {
  return (

      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
