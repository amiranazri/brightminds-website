"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HorizontalCard = ({ imageUrl, title, subtitle }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white mx-4 my-3 min-w-[200px] min-h-52 sm:max-w-[224px]  md:max-w-[500px] lg:max-w-[500px] md:min-h-50 lg:min-h-53 border border-gray-200 rounded-[16px] lg:rounded-[16px] p-4 flex items-center flex-col md:flex-row lg:flex-row cursor-pointer hover:shadow-md"
      onClick={() => {
        router.push("/services");
      }}
    >
      <Image src={imageUrl} width={188} height={148} />
      <div className="ml-4 sm:m-0 text-center  md:text-left">
        <p className="text-[#19598f] font-bold mb-2 text-2xl sm:text-center">
          {title}
        </p>
        <p className="text-gray-700 text-lg sm:text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
