"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Slider from "react-infinite-logo-slider";
import CourseCard from "../ui/components/CourseCard";
import partnerSchools from "../../data/partnerSchools.json";
import coursedata from "../../data/courseData.json";

function About() {
  const router = useRouter();

  const handleContactUs = (slug) => {
    router.push(`/contact/${slug}`);
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowWidth);
      return () => {
        window.removeEventListener("resize", updateWindowWidth);
      };
    }
  }, []);

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
          <h3 className=" font-bold mb-4">What Is Bright Minds?</h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            {`We are a centre of learning that aims to equip students with
            relevant skills to take on the modern world. Going beyond classroom
            education, our courses supplement traditional learning with
            practical knowledge.`}
          </p>

          <button
            onClick={() => {
              handleContactUs("general");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <h6>CONTACT US</h6>
          </button>
        </div>
      </div>
      {windowWidth <= 640 ? (
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto max-w-6xl py-12 px-8">
          <div className="flex-1">
            <Image
              src="/about_2.svg"
              alt="Bright Minds logo"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold mb-4">
              Navigating the Gap Between Education and Industry{" "}
            </h3>
            <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
              {`Despite the historically high production of around 50,000
              graduates annually, a significant number of them face unemployment
              due to a lack of relevant skills. The disconnect between
              traditional education and the evolving demands of society
              contributes to graduates being ill-equipped for the competitive
              job market. This highlights the pressing issue of the education
              system's failure to adapt quickly, leaving many students
              functionally illiterate and unprepared for real-world challenges.`}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-12 px-8">
          <div className="flex-1 text-center md:text-center">
            <h3 className="font-bold mb-4">
              Navigating the Gap Between Education and Industry{" "}
            </h3>
            <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
              {`Despite the historically high production of around 50,000
              graduates annually, a significant number of them face unemployment
              due to a lack of relevant skills. The disconnect between
              traditional education and the evolving demands of society
              contributes to graduates being ill-equipped for the competitive
              job market. This highlights the pressing issue of the education
              system's failure to adapt quickly, leaving many students
              functionally illiterate and unprepared for real-world challenges.`}
            </p>
          </div>
          <div className="flex-1 ml-32 sm:block md:hidden lg:block">
            <Image
              src="/about_2.svg"
              alt="Bright Minds logo"
              width={424}
              height={424}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-12 px-8">
        <div className="flex-1 sm:block md:hidden lg:block">
          <Image
            src="/about_3.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-center">
          <h3 className=" font-bold mb-4">
            Nurturing Future Leaders with Modern Education{" "}
          </h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            {`Bright Minds is dedicated to providing education and training that
            equips students with the skills needed to navigate today's rapidly
            changing world. Recognizing the limitations of traditional
            education, we aim to supplement it by focusing on relevant skills
            essential for success in the evolving society. The modern teaching
            methods at Bright Minds prioritize student-centered learning to
            ensure a tailored approach, with our current courses designed to
            foster 21st Century Skills.`}
          </p>
        </div>
      </div>
      {/* COURSES */}
      <div className="flex flex-wrap justify-center items-center w-[80%] mx-auto my-16">
        {coursedata.map((course, index) => (
          <CourseCard
            key={index}
            icon={course.icon}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-6xl py-12 px-8">
        <div className="flex-1">
          <Image
            src="/about_4.svg"
            alt="Bright Minds logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className=" font-bold mb-4">Brightminds & Partnerships</h3>
          <p className="text-gray-600 mb-8" style={{ textAlign: "justify" }}>
            {`We are a centre of learning that aims to equip students with
            relevant skills to take on the modern world. Going beyond classroom
            education, our courses supplement traditional learning with
            practical knowledge.`}
          </p>

          <button
            onClick={() => {
              handleContactUs("school");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <h6>CONTACT US</h6>
          </button>
        </div>
      </div>

      <div className="mt-16 py-16 bg-sky-100 ">
        <h1 className="my-16">Partner Schools</h1>
        <Slider
          width="250px"
          duration={30}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {partnerSchools.map((p) => (
            <Slider.Slide
              key={p.imageSrc}
              className="flex items-center justify-center "
            >
              <img
                src={p.imageSrc}
                alt={p.alt}
                style={{ minWidth: "100px", maxWidth: "164px" }}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default About;
