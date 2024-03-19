"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EventCalendar from "./EventCalendar";

function OurServices() {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState("/class-1.png");

  const handleContactUs = (slug: string) => {
    router.push(`/contact/${slug}`);
  };

  const handleTabClick = (slug: string) => {
    let newImageSrc = "";
    switch (slug) {
      case "class1":
        newImageSrc = "/class-1.png";
        break;
      case "class2":
        newImageSrc = "/class-1.png";
        break;
      case "class3":
        newImageSrc = "/class-2.png";
        break;
      case "class4":
        newImageSrc = "/class-3.png";
        break;
      default:
        newImageSrc = "/class-1.png";
        break;
    }
    setImageSrc(newImageSrc);
  };

  const buttonData = [
    { title: "All", slug: "class1" },
    { title: "Ages 7-8", slug: "class2" },
    { title: "Ages 8-12", slug: "class3" },
    { title: "Ages 13-15", slug: "class4" },
  ];

  return (
    <>
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
          <h3 className="font-bold mb-4">
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
      <div className="flex-1 text-center my-16">
        <h3 className="font-bold mb-4">Our Classes</h3>
        <div className="flex justify-center">
          {buttonData.map((button, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(button.slug)}
              className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full mr-4"
            >
              <h6>{button.title}</h6>
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-2 grid-cols-2 sm:grid-cols-2 items-center justify-center">
          <Image
            src="/class-1.png"
            alt="Class image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/class-2.png"
            alt="Class image 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/class-3.png"
            alt="Class image 3"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/class-4.png"
            alt="Class image 4"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Calendar */}
      <div className="max-w-[1280px] sm:p-5 xl:p-0 m-auto">
        <h1 className="mb-10">Our Schedule</h1>
        <EventCalendar />
        <div className="mt-10"></div>
      </div>
    </>
  );
}

export default OurServices;
