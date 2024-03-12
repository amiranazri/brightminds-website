"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CourseCard from "../ui/components/CourseCard";
import icon1 from "../../public/critical_analysis.svg";
import icon2 from "../../public/financial_literacy.svg";
import icon3 from "../../public/public_speaking.svg";
import icon4 from "../../public/communication_skills.svg";
import icon5 from "../../public/debate.svg";
import icon6 from "../../public/writing_skills.svg";
import icon7 from "../../public/leadership_skills.svg";
import icon8 from "../../public/entrepreneurial_skills.svg";

function About() {
  const router = useRouter();

  const handleContactUs = () => {
    router.push("/contact");
  };

  const [windowWidth, setWindowWidth] = useState(0);

  const courseData = [
    {
      icon: icon4,
      title: "Communication Skills",
      description:
        "Develop your language skills through creative writing and communication.",
    },
    {
      icon: icon2,
      title: "Financial Literacy",
      description:
        "Learn the fundamentals of coding and programming languages.",
    },
    {
      icon: icon3,
      title: "Public Speaking",
      description:
        "Engage in hands-on experiments to understand scientific concepts.",
    },
    {
      icon: icon1,
      title: "Critical Analysis",
      description:
        "Explore the world of literature and enhance your analytical skills.",
    },
    {
      icon: icon8,
      title: "Entrepreneurial Skills",
      description: "Explore cutting-edge technologies and foster innovation.",
    },
    {
      icon: icon6,
      title: "Debate",
      description:
        "Unleash your creativity with courses on art, design, and visual communication.",
    },
    {
      icon: icon7,
      title: "Leadership Skills",
      description:
        "Gain essential engineering knowledge and problem-solving skills.",
    },
    {
      icon: icon5,
      title: " Writing Skills",
      description:
        "Master the art of interpreting and visualizing data for decision-making.",
    },
  ];

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
            onClick={handleContactUs}
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
        {courseData.map((course, index) => (
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
            onClick={handleContactUs}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <h6>CONTACT US</h6>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
