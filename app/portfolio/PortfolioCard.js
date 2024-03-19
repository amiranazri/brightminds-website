
import React from 'react'
import Image from "next/image"

function PortfolioCard({imageSrc, text}) {
  return (
    <div className="relative w-[200px] h-[300px] overflow-hidden flex-shrink-0 m-2">
      <Image src={imageSrc} fill objectFit="cover" />
      <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
      <div className="w-full h-[270px] absolute z-20 flex flex-col items-center justify-end">
        <div className="text-white mb-2 text-center">{text}</div>
        <div className="text-white bg-[#19598F] hover:bg-yellow-300 hover:text-black w-[150px] p-1 cursor-pointer text-center">READ MORE</div>
      </div>
    </div>
  )
}

export default PortfolioCard