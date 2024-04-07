import React from "react";
import styled from "styled-components";
import Link from "next/link";

function MainButton({ text = "Partner With Us", isAbsolute=false }) {
  return (
    <Link href="contact/corporate">
      <div
        className={`text-center mx-auto mb-16 bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full w-[170px] ${isAbsolute ? "absolute -bottom-20 left-0 right-0 w-[100px] sm:w-[130px] lg:w-[150px] m-auto z-10 p-0 sm:p-2 lg:p-3 rounded-md text-xs sm:text-md lg:text-xl" : ""}`}
        style={{ transition: "opacity 0.5s ease" }}
      >
        {text}
      </div>
    </Link>
  );
}

export default MainButton;
