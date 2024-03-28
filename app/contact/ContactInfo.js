import React from "react";
import Image from "next/image";

function ContactInfo({ imgSrc, alt, title, subTitle }) {
  return (
    <div className="flex w-[250px] items-center">
      <div>
        <Image src={imgSrc} width={40} height={40} alt={alt} />
      </div>
      <div className="ml-3">
        <div className="text-primary-blue font-bold">{title}</div>
        <div className="font-bold">{subTitle}</div>
      </div>
    </div>
  );
}

export default ContactInfo;
