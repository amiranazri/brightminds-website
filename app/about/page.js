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
      {windowWidth <= 1024 ? (
        <>
          <div className="flex flex-col items-center justify-between md:items-center md:justify-center mx-auto max-w-7xl py-12">
            <div className="flex-1 text-center ">
              <Image
                src="/what-we-do.svg"
                alt="What we do at Brightminds"
                width={400}
                height={400}
                className="rounded-lg mt-16 mx-auto"
              />
              <h3 className=" font-bold mb-4">What We Do</h3>
              <p
                className="text-gray-600 mb-8 px-8"
                style={{ textAlign: "justify" }}
              >
                {`At BrightMinds we're committed to empowering students with essential soft skills and life skills needed for success, offering tailored classes that focus on communication, leadership, critical thinking, and emotional intelligence and essential life skills. Through interactive classes and workshops and personalized mentoring, we prepare students for academic excellence and future careers. Simultaneously, we partner with corporate clients to deliver impactful CSR initiatives, addressing pressing social and environmental challenges collaboratively. We specialize in community engagement projects where our data driven approach assists our corporate clients to create the social impact they intended through these projects. We work together to drive meaningful change. Join us in shaping the next generation of leaders and making a positive impact on society.`}
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
          <div className="flex flex-col items-center justify-between mx-auto max-w-6xl pt-4">
            <div className="flex-1">
              <Image
                src="/the-gap.svg"
                alt="Bright Minds logo"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
              <h3 className="font-bold mb-4 text-center px-8">
                Navigating the Gap Between Education and Industry{" "}
              </h3>
              <p
                className="text-gray-600 mb-8 px-8"
                style={{ textAlign: "justify" }}
              >
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

          <div className="flex flex-col items-center justify-between mx-auto max-w-6xl pt-4">
            <div className="flex-1">
              <Image
                src="/bright-learners.svg"
                alt="Bright Minds logo"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <h3 className="font-bold mb-4 text-center">
                BrightLearners Initiative{" "}
              </h3>
              <p
                className="text-gray-600 mb-8 px-8"
                style={{ textAlign: "justify" }}
              >
                {`We are deeply committed to making soft skill and life skill education accessible to all, regardless of socioeconomic status. As part of our 'BrightLearners' initiative, we offer free classes to students from underserved communities and anyone who may not be able to afford our classes. Our dedication to this cause stems from our belief that everyone deserves the opportunity to develop essential skills that pave the way for success in both personal and professional endeavors. If this applies to you, we invite you to take advantage of this opportunity by clicking the button below to be directed to our contact form. We will reach out to you promptly to discuss the available classes and how we can support your journey towards a brighter future. Do note that the eligibility for these free classes will be assessed before you are enrolled.`}
              </p>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    handleContactUs("school");
                  }}
                  className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
                >
                  <h6>Free Classes</h6>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-12 mt-24">
            <div className="flex-1 text-center md:text-center ml-40">
              <h3 className="font-bold mb-4">What We Do </h3>
              <p
                className="text-gray-600 mb-8"
                style={{ textAlign: "justify" }}
              >
                {`At BrightMinds we're committed to empowering students with essential soft skills and life skills needed for success, offering tailored classes that focus on communication, leadership, critical thinking, and emotional intelligence and essential life skills. Through interactive classes and workshops and personalized mentoring, we prepare students for academic excellence and future careers. Simultaneously, we partner with corporate clients to deliver impactful CSR initiatives, addressing pressing social and environmental challenges collaboratively. We specialize in community engagement projects where our data driven approach assists our corporate clients to create the social impact they intended through these projects. We work together to drive meaningful change. Join us in shaping the next generation of leaders and making a positive impact on society.`}
              </p>
            </div>
            <div className="flex-1 ml-40">
              <Image
                src="/what-we-do.svg"
                alt="What we do at Brightminds"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-12">
            <div className="flex-1 ml-24">
              <Image
                src="/the-gap.svg"
                alt="Bright Minds logo"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="flex-1 text-center mr-40">
              <h3 className="font-bold mb-4 ">
                Navigating the Gap Between Education and Industry{" "}
              </h3>
              <p className="text-gray-600 " style={{ textAlign: "justify" }}>
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
          <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-12 mt-8">
            <div className="flex-1 text-center ml-24">
              <h3 className="font-bold mb-4 ">BrightLearners Initiative </h3>
              <p
                className="text-gray-600 mb-8 "
                style={{ textAlign: "justify" }}
              >
                {`We are deeply committed to making soft skill and life skill education accessible to all, regardless of socioeconomic status. As part of our 'BrightLearners' initiative, we offer free classes to students from underserved communities and anyone who may not be able to afford our classes. Our dedication to this cause stems from our belief that everyone deserves the opportunity to develop essential skills that pave the way for success in both personal and professional endeavors. If this applies to you, we invite you to take advantage of this opportunity by clicking the button below to be directed to our contact form. We will reach out to you promptly to discuss the available classes and how we can support your journey towards a brighter future. Do note that the eligibility for these free classes will be assessed before you are enrolled.`}
              </p>
              <button
                onClick={() => {
                  handleContactUs("school");
                }}
                className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
              >
                <h6>Free Classes</h6>
              </button>
            </div>
            <div className="flex-1 mr-8 ">
              <Image
                src="/bright-learners.svg"
                alt="Bright Minds logo"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </>
      )}

      {/* COURSES */}
      <div className="flex flex-wrap justify-center items-center md:w-[60%] lg:w-[80%] mx-auto mt-16 mb-8">
        {coursedata.map((course, index) => (
          <CourseCard
            key={index}
            icon={course.icon}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>

      {windowWidth <= 1024 ? (
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-12 mt-4">
          <div className="flex-1 text-center px-8">
            <Image
              src="/about_4.svg"
              alt="Bright Minds logo"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="text-center font-bold mb-4">
              School Partnership Program
            </h3>
            <p className="text-gray-600 mb-8 " style={{ textAlign: "justify" }}>
              {`We specialize in offering custom soft skills and life skills programs tailored to meet the unique needs of schools and their students. By partnering with international schools as part of their Co-Curricular Activities (CCA), we provide engaging and interactive sessions that complement their academic curriculum. Our programs not only enhance students' personal development but also contribute to their holistic education, equipping them with essential skills for success in both their academic and future professional endeavors. Through our collaborative approach, schools benefit from enriching their CCA offerings and empowering students to thrive in today's dynamic world.`}
            </p>
            <button
              onClick={() => {
                handleContactUs("school");
              }}
              className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
            >
              <h6>Contact Us</h6>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row  mx-auto py-12 mt-16">
            <div className="flex-1 text-center ml-64">
              <h3 className="text-center font-bold mb-4">
                School Partnership Program
              </h3>
              <p
                className="text-gray-600 mb-8"
                style={{ textAlign: "justify" }}
              >
                {`We specialize in offering custom soft skills and life skills programs tailored to meet the unique needs of schools and their students. By partnering with international schools as part of their Co-Curricular Activities (CCA), we provide engaging and interactive sessions that complement their academic curriculum. Our programs not only enhance students' personal development but also contribute to their holistic education, equipping them with essential skills for success in both their academic and future professional endeavors. Through our collaborative approach, schools benefit from enriching their CCA offerings and empowering students to thrive in today's dynamic world.`}
              </p>
              <button
                onClick={() => {
                  handleContactUs("school");
                }}
                className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full w-[200px]"
              >
                <h6>Partner With Us</h6>
              </button>
            </div>
            <div className="flex-1 ml-40 my-auto">
              <Image
                src="/about_4.svg"
                alt="Bright Minds logo"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </>
      )}

      <div className="mt-16 pt-8 pb-16 bg-sky-100 ">
        <h1 className="my-16">Schools We Work With</h1>
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
