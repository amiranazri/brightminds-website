"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EventCalendar from "./EventCalendar";

function OurServices() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("all");
  const [imageSrc, setImageSrc] = useState("/class-1.png");

  const handleContactUs = (slug) => {
    router.push(`/contact/${slug}`);
  };

  const handleTabClick = (slug) => {
    setSelectedTab(slug);
  };

  const ourClassesRef = useRef(null);

  useEffect(() => {
    console.log("useEffect triggered");
    if (
      router.query &&
      typeof router.query.scrollTo !== "undefined" &&
      ourClassesRef.current
    ) {
      console.log("router.query.scrollTo:", router.query.scrollTo);
      console.log("ourClassesRef.current:", ourClassesRef.current);
      ourClassesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.query]);

  const buttonData = [
    { title: "All", slug: "all" },
    { title: "Ages 7-10", subTitle: "Elementary", slug: "elementary" },
    { title: "Ages 11-13", subTitle: "Junior", slug: "junior" },
    { title: "Ages 14-16", subTitle: "Senior", slug: "senior" },
    { title: "Ages 17 >", subTitle: "Adult", slug: "adult" },
  ];

  const imagesData = {
    all: ["/class-1.png", "/class-2.png", "/class-3.png", "/class-4.png"],
    elementary: ["/class-2.png"],
    junior: ["/class-1.png", "/class-3.png"],
    senior: ["/class-4.png"],
    adult: ["/class-2.png"],
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
      <div className="mt-[113px] md:mt-[136px] flex flex-col items-center justify-center md:justify-between mx-auto max-w-[90%]  py-12 px-8">
        <div className="flex-1">
          <Image
            src="/about_1.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg sm:ml-16"
          />
        </div>
        <div className="flex-1 justify-center items-center md:text-left">
          <h3 className="font-bold mb-4 text-center px-40">
            Unlock Your Potential With E-Learning Classes
          </h3>
          <p
            className="text-gray-600 mb-8 lg:px-24"
            style={{ textAlign: "justify" }}
          >
            {`Embark on a transformative journey with our online classes tailored exclusively for students. Each session is not just a course; it's an immersive experience crafted to ignite curiosity, broaden horizons, and propel students towards academic and personal growth. Led by expert instructors passionate about nurturing young minds, our dynamic online classes offer a diverse range of subjects to explore. Whether your child seeks to enhance their skills or prepare for future academic challenges, our flexible, interactive approach ensures learning anytime, anywhere. With unparalleled support and guidance, our goal is to empower students to unlock their fullest potential and excel in their educational journey. Start your child's adventure today and set them on the path to lifelong learning and skill mastery!`}
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                handleContactUs("student");
              }}
              className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
            >
              <h6>Register Now</h6>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={ourClassesRef}
        id="ourClasses"
        className="flex-1 text-center my-16"
      >
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
              {button.subTitle ? <h8>{button.subTitle}</h8> : <></>}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap content-center  justify-center">
          {renderImages()}
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
