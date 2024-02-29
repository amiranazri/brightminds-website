import React from 'react'
import Image from "next/image"

function Why({imageName="brightminds_logo_1.jpeg", text="test", subText="test test test test test test test test test test test test"}) {
  return (
    <div className='w-[320px] lg:h-[500px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] flex flex-col items-center justify-between rounded-xl p-2'>
      <img src={`/${imageName}`} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px]" alt={text} />
      <div className='h-[50%]'>
        <div className="font-bold text-black text-xl text-center w-auto lg:h-[50px] 2xl:text-2xl mt-2 mb-3">{text}</div>
        <div className="mt-2 lg:text-md text-justify 2xl:text-xl">{subText}</div>
      </div>
    </div>
  )
}

export default Why