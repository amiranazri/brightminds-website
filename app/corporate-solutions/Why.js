import React from "react";
import Image from "next/image";
import "./why.css";

function Why({
  imageName = "brightminds_logo_1.jpeg",
  text = "Lorem Ipsum",
  subText = ["Lorem Ipsum"],
}) {
  return (
    <div className="w-[320px] lg:h-[400px] lg:w-[400px] xl:w-[500px] flex flex-col items-center justify-between rounded-xl p-2 ml-2 mr-2">
      <img src={`/${imageName}`} className="w-[80%] h-[80%]" alt={text} />
      <div>
        <h1 className="font-bold text-xl text-center w-auto lg:h-[50px] 2xl:text-2xl mt-2 mb-3">
          {text}
        </h1>
        <div className="mt-2 px-8 lg:text-md text-left 2xl:text-xl">
          <ul className="list-disc list-inside">
            {subText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Why;
