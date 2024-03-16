"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function OurServices() {
  const router = useRouter();

  const handleContactUs = (slug: string) => {
    router.push(`/contact/${slug}`);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-12 px-8">
      <div className="flex-1">
        <Image
          src="/about_1.svg"
          alt="Bright Minds logo"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className=" font-bold mb-4">
          Unlock Your Potential With E-Learning Classes
        </h3>
        <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
          {`Our e-learning classes are not just courses; they're transformative experiences designed to ignite your curiosity, expand your knowledge, and propel you towards success. Dive into a diverse range of subjects, led by expert instructors who are dedicated to your growth. Whether you're pursuing personal enrichment or professional advancement, our dynamic e-learning platform offers flexibility, interactivity, and unparalleled support. Join us on this journey of discovery and unlock your fullest potential from anywhere in the world. Start your adventure today!`}
        </p>

        <button
          onClick={() => {
            handleContactUs("general");
          }}
          className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
        >
          <h6>Contact Us</h6>
        </button>
      </div>
    </div>
  );
}

export default OurServices;
