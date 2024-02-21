import React from "react";

const HorizontalCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="lg:flex-shrink-0">
        <div
          className="h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${imageUrl})` }}
          title={title}
        ></div>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
