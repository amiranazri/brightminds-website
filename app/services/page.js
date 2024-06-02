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
    if (
      router.query &&
      typeof router.query.scrollTo !== "undefined" &&
      ourClassesRef.current
    ) {
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
          width={420}
          height={420}
          className="rounded-lg my-4 mx-auto"
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
          className="rounded-lg my-4 mx-auto"
        />
      ));
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center py-24 sm:py-4 mt-16">
        <div className="flex-1 md:ml-32 lg:ml-32 sm:flex sm:justify-center">
          <Image
            src="/our-services-main.png"
            alt="Bright Minds logo"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center md:text-left md:mr-24 lg:mr-24 px-4 sm:px-2">
          <h1 className="font-bold mb-4 text-center">The School of Learning</h1>
          <h4 className="text-center mt-2 my-4 sm:my-2">
            Setting the standard in soft skill education
          </h4>
          <p className="text-gray-600 mb-4 sm:mb-2 text-justify">
            {`The School of Learning, is an innovative program  that provides a diverse range of essential and practical skill training tailored for younger students.`}
          </p>
          <p className="text-gray-600 mb-4 sm:mb-2 text-justify">
            {`Continuously updated to meet evolving standards, our curriculum remains aligned with the dynamic social landscape of our post-modern society.`}
          </p>
          <p className="text-gray-600 mb-4 sm:mb-2 text-justify">
            {`Offering both online and physical classes, we ensure accessibility and flexibility to cater to the diverse learning needs of our students.`}
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
        className="flex-1 text-center my-16 sm:my-8"
      >
        <h3 className="font-bold mb-4">Our Classes</h3>
        <div className="flex flex-wrap justify-center items-center relative px-4 sm:px-2">
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
        <div className="mt-4 flex flex-wrap content-center justify-center">
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
