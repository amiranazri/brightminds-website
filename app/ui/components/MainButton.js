import React from "react";
import styled from "styled-components";
import Link from "next/link";

function MainButton({ text = "Partner With Us" }) {
  return (
    <div
      className="text-center mx-auto mb-16 bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
      style={{ transition: "opacity 0.5s ease" }}
    >
      <Link href="contact/corporate">{text}</Link>
    </div>
  );
}

export default MainButton;
