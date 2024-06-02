"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import EducationPillar from "./EducationPillar";
import Why from "./Why";
import { useEffect, useState, useRef } from "react";
import MainButton from "@/app/ui/components/MainButton";
import Slider from "react-infinite-logo-slider";
import partnerData from "./partnerData.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const educationPillars = [
  {
    key: "1",
    imageName: "education_pillar_es.svg",
    text: "Environmental Sustainability",
    modalText:
      "The Environmental Sustainability sector is dedicated to fostering awareness and action towards protecting our planet. It covers topics such as climate change mitigation, sustainable living practices, waste reduction and recycling, and the conservation of natural resources. These talks encourage individuals and communities to adopt eco-friendly habits and contribute to global sustainability efforts.",
  },
  {
    key: "2",
    imageName: "education_pillar_feae.svg",
    text: "Financial Education & Empowerment",
    modalText:
      "This sector focuses on providing individuals of all ages with the knowledge and tools necessary for sound financial management. It covers a wide range of topics, including savings and budgeting strategies, the fundamentals of investing, understanding credit and debt, and planning for financial milestones such as homeownership and retirement. The goal of Financial Education and Empowerment is to promote financial literacy across the lifespan, empowering participants to achieve financial stability and independence.",
  },
  {
    key: "3",
    imageName: "education_pillar_haw.svg",
    text: "Health & Wellness",
    modalText:
      "Talks and programs in the Health and Wellness sector focus on educating individuals about maintaining and improving their physical and mental well-being. Topics include nutritional guidance, the importance of balanced diets, understanding menstrual health, personal grooming habits, and strategies for achieving a holistic lifestyle. This sector aims to empower people with knowledge and practical tips to make informed health choices.",
  },
  {
    key: "4",
    imageName: "education_pillar_ecis.svg",
    text: "Effective Communication & Interpersonal Skills",
    modalText:
      "Effective Communication and Interpersonal Skills sector addresses the foundational aspects of how we connect with others. It encompasses topics on verbal and non-verbal communication, active listening, empathy, conflict resolution, and emotional intelligence. These programs are designed to enhance personal and professional relationships, improve teamwork, and foster a culture of open and constructive dialogue.",
  },
  {
    key: "5",
    imageName: "education_pillar_ti.svg",
    text: "Technology & Innovation",
    modalText:
      "This sector explores the rapidly evolving world of technology and its impact on society. Talks cover emerging technologies such as artificial intelligence, blockchain, and the Internet of Things (IoT), digital literacy, cybersecurity, and ethical considerations in technology use. The focus is on educating individuals about the opportunities and challenges presented by innovation, preparing them for the future digital landscape.",
  },
];

function CorporateSolutions() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div style={{ margin: "0 auto", width: "100%", position: "relative" }}>
        <Image
          src="/corporate_services_banner.svg"
          width={120}
          height={120}
          layout="responsive"
          alt="bright minds"
          className="mt-[113px] md:mt-[136px] min-[918px]:mt-[-2px]"
        />
      </div>
      <div className="absolute left-16 top-[50%] hidden md:hidden lg:flex flex-col justify-center">
        <MainButton isAbsolute={true} text="Contact Us" />
      </div>

      <div className="text-center mt-12 mb-12">
        <h1>Your Community Engagement Partner</h1>
        <h4 className="text-center mt-2 mx-24">
          We are committed to working alongside our clients to create a
          meaningful impact in communities. We collaborate closely to develop
          and implement quality education initiatives that uplift individuals
          and foster positive change, ensuring a brighter future for all.
        </h4>
      </div>

      <div className="min-h-[600px] justify-center items-center w-[300px] sm:w-[600px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] m-auto">
        <h1 className="mb-5">Core Education Pillars</h1>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          slidesToSlide={1}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // itemClass="carousel-item-padding-40-px" // Add this line
          itemClass="carousel-item-padding-40-px"
          partialVisible={false}
          // centerMode={true}
        >
          {educationPillars.map((pillar, index) => (
            <EducationPillar
              key={pillar.key}
              imageName={pillar.imageName}
              text={pillar.text}
              modalText={pillar.modalText}
            />
          ))}
        </Carousel>
      </div>

      <div className="mb-56 mt-10 md:mt-16">
        <h1>Why Us</h1>
        <WhyUs className="flex flex-col lg:flex-row justify-center mt-10 space-y-2 space-x-4 lg:space-y-0 lg:space-x-4 xl:space-x-10 items-center text-center px-16 md:px-8 md:mb-24 lg:mb-24">
          <Why
            key={1}
            imageName="why_us_1.svg"
            text="Data-Driven Social Impact"
            subText={[
              "Data-driven approach underscored by field experts",
              "Aligned with Sustainable Development Goals (SDGs) and ESG reporting",
              "Reliable social impact assessments",
              "Supports corporate sustainability commitments",
              "Facilitates  transparent progress reporting",
            ]}
          />
          <Why
            key={2}
            imageName="why_us_2.svg"
            text="Comprehensive Reports"
            subText={[
              "Comprehensive data collection and analysis",
              "Tailored reporting frameworks",
              "Clear insights into program objectives",
              "Transparent and accountable reporting",
              "Maximize effectiveness of investments",
            ]}
          />
          <Why
            key={3}
            imageName="why_us_3.svg"
            text="Community-Centric Engagement"
            subText={[
              "Commitment to community engagement",
              "Incorporate community feedback for adaptability",
              "Programs resonate on universal/micro scale",
              "Rooted in diverse needs and aspirations",
              "Empowers communities towards collective progress",
            ]}
          />
        </WhyUs>
      </div>

      <div className="pt-16 pb-8 bg-sky-100 sm:mt-24 xl:mt-44">
        <h1>Companies We Work With</h1>
        <div className="my-4">
          <Slider
            width="250px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={"#fff"}
          >
            {partnerData.map((p) => (
              <Slider.Slide
                key={p.imageSrc}
                className="flex items-center justify-center"
              >
                <img src={p.imageSrc} alt={p.alt} className="w-44" />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
        <MainButton text={"Discovery Session"} />
      </div>
    </>
  );
}

export default CorporateSolutions;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Banner = styled.img`
  /* @media (max-width: 639px) {
    transform: scale(1.5);
  } */
`;

const BannerText = styled.div`
  transition: transform 0.3s ease;
  @media (max-width: 639px) {
    bottom: 0;
    margin-bottom: 2px;
  }
  @media (max-width: 520px) {
    bottom: 0;
    margin-bottom: 2px;
    font-size: 0.7rem;
  }
  @media (max-width: 430px) {
    bottom: 0;
    margin-bottom: 2px;
    font-size: 0.5rem;
  }
`;
const WhyUs = styled.div`
  margin-top: 32px;
`;
