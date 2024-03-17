"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EventCalendar from "./EventCalendar";

function OurServices() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("all");
  const [imageSrc, setImageSrc] = useState("/class-1.png");

  const handleContactUs = (slug: string) => {
    router.push(`/contact/${slug}`);
  };

  const handleTabClick = (slug) => {
    setSelectedTab(slug);
  };

  const buttonData = [
    { title: "All", slug: "all" },
    { title: "Ages 7-8", slug: "age-tier-1" },
    { title: "Ages 8-12", slug: "age-tier-2" },
    { title: "Ages 13-15", slug: "age-tier-3" },
  ];

  const imagesData = {
    all: ["/class-1.png", "/class-2.png", "/class-3.png", "/class-4.png"],
    "age-tier-1": ["/class-2.png"],
    "age-tier-2": ["/class-1.png", "/class-3.png"],
    "age-tier-3": ["/class-4.png"],
  };

  const renderImages = () => {
    if (selectedTab === "all") {
      return imagesData.all.map((imgSrc, index) => (
        <Image
          key={index}
          src={imgSrc}
          alt={`Class ${index + 1} image`}
          width={400}
          height={400}
          className="rounded-lg"
        />
      ));
    } else {
      return imagesData[selectedTab].map((imgSrc, index) => (
        <Image
          key={index}
          src={imgSrc}
          alt={`Class ${index + 1} image`}
          width={400}
          height={400}
          className="rounded-lg"
        />
      ));
    }
  };

  return (
    <>
      <div className="mt-[113px] md:mt-[136px] flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-[90%]  py-12 px-8">
        <div className="flex-1">
          <Image
            src="/about_1.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg sm:ml-16"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold mb-4">
            Unlock Your Potential With E-Learning Classes
          </h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            {`Embark on a transformative journey with our online classes tailored exclusively for students. Each session is not just a course; it's an immersive experience crafted to ignite curiosity, broaden horizons, and propel students towards academic and personal growth. Led by expert instructors passionate about nurturing young minds, our dynamic online classes offer a diverse range of subjects to explore. Whether your child seeks to enhance their skills or prepare for future academic challenges, our flexible, interactive approach ensures learning anytime, anywhere. With unparalleled support and guidance, our goal is to empower students to unlock their fullest potential and excel in their educational journey. Start your child's adventure today and set them on the path to lifelong learning and skill mastery!`}
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
        <div className="flex flex-wrap justify-center items-center relative">
          {buttonData.map((button, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(button.slug)}
              className={`text-center ${
                selectedTab === button.slug ? "bg-[#CADDFF]" : "bg-transparent"
              } text-black font-bold py-2 px-4 rounded-full mr-4 mb-4`}
              style={{ minWidth: "100px" }} // Added minWidth to ensure button size consistency
            >
              <h6>{button.title}</h6>
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap content-center  justify-center">
          {renderImages()}
        </div>
      </div>
      {/* Calendar */}
      <div className="max-w-[1280px] sm:p-5 xl:p-0 m-auto">
        <EventCalendar />
      </div>
    </>
  );
}

export default OurServices;
