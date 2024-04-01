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
      <div className="w-[100%] relative">
        <Image
          src="/corporate_services_banner.svg"
          width={120}
          height={120}
          layout="responsive"
          alt="bright minds"
          className="mt-[113px] md:mt-[136px] min-[918px]:mt-[-2px]"
        />

        <MainButton isAbsolute={true} text="Contact Us" />
      </div>

      <div className="my-24 ">
        <h1>Core Education Pillars</h1>
        <EducationPillarsWrapper>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
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
        </EducationPillarsWrapper>
      </div>

      <div className="mt-16 mb-56 sm:mt-8 md:mt-16">
        <h1>Why Us</h1>
        <WhyUs className="flex flex-col lg:flex-row justify-center mt-10 space-y-3 space-x-4 lg:space-y-0 lg:space-x-4 xl:space-x-10 items-center text-center px-16">
          <Why
            key={1}
            imageName="why_us_adaptation.svg"
            text=" Data-Driven Social Impact"
            subText="Our data-driven approach, underscored by field experts, aligns with both the Sustainable Development Goals (SDGs) and ESG reporting requirements. This ensures our social impact assessments are not only reliable but also strategically positioned to support corporate clients in achieving their sustainability commitments. By leveraging SDG-aligned metrics and providing essential data for ESG reporting, we empower companies to transparently demonstrate their progress towards global sustainability targets and enhance their stakeholder engagement."
          />
          <Why
            key={2}
            imageName="why_us_empowerment.svg"
            text="Comprehensive Reports"
            subText="Our comprehensive reporting sets us apart by meticulously collecting and analyzing a wide array of data points relevant to each program's objectives. Tailored reporting frameworks ensure alignment with client priorities, offering clear insights into academic, skill-based, and community impact. Transparent and accountable, our reports foster informed decision-making while inviting stakeholder input for continuous improvement. Through this approach, we empower clients to maximize the effectiveness of their investments, driving meaningful change and lasting impact."
          />
          <Why
            key={3}
            imageName="why_us_education.svg"
            text="Community-Centric Engagement"
            subText="Our commitment to community engagement is foundational. By listening to and incorporating community feedback, we ensure our educational programs are adaptable and resonate on a universal/micro scale. This approach allows us to create experiences that are deeply rooted in diverse needs and aspirations, fostering a culture of participation and long-term success. Our inclusive strategy empowers communities, driving collective progress towards social and environmental goals with a foundation of active engagement and shared success. Our programs are designed to not just meet, but exceed, the collective aspirations of the communities we serve, laying the groundwork for enduring impact and mutual growth."
          />
        </WhyUs>
      </div>

      <div className="pt-16 pb-8 bg-sky-100 ">
        <h1>Our Partners</h1>
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
                <img src={p.imageSrc} alt={p.alt} className="w-30" />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
        <MainButton />
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
const EducationPillarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 16px;
  margin-bottom: -16px;
  // width: 80%;
`;

const WhyUs = styled.div`
  margin-top: 32px;
`;
