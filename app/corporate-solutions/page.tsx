"use client"

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import EducationPillar from "./EducationPillar"
import Title from "@/app/ui/components/Title"
import Why from "./Why";
import { useEffect, useState, useRef } from 'react';
import MainButton from "@/app/ui/components/MainButton"
import Slider from 'react-infinite-logo-slider'
import partnerData from "./partnerData.json";

const educationPillars = [
  {
    key: "1",
    imageName: "education_pillar_es.svg",
    text: "Environmental Sustainability",
    modalText: "The Environmental Sustainability sector is dedicated to fostering awareness and action towards protecting our planet. It covers topics such as climate change mitigation, sustainable living practices, waste reduction and recycling, and the conservation of natural resources. These talks encourage individuals and communities to adopt eco-friendly habits and contribute to global sustainability efforts."
  },
  {
    key: "2",
    imageName: "education_pillar_feae.svg",
    text: "Financial Education & Empowerment",
    modalText: "This sector focuses on providing individuals of all ages with the knowledge and tools necessary for sound financial management. It covers a wide range of topics, including savings and budgeting strategies, the fundamentals of investing, understanding credit and debt, and planning for financial milestones such as homeownership and retirement. The goal of Financial Education and Empowerment is to promote financial literacy across the lifespan, empowering participants to achieve financial stability and independence."
  },
  {
    key: "3",
    imageName: "education_pillar_haw.svg",
    text: "Health & Wellness",
    modalText: "Talks and programs in the Health and Wellness sector focus on educating individuals about maintaining and improving their physical and mental well-being. Topics include nutritional guidance, the importance of balanced diets, understanding menstrual health, personal grooming habits, and strategies for achieving a holistic lifestyle. This sector aims to empower people with knowledge and practical tips to make informed health choices."
  },
  {
    key: "4",
    imageName: "education_pillar_ecis.svg",
    text: "Effective Communication & Interpersonal Skills",
    modalText: "Effective Communication and Interpersonal Skills sector addresses the foundational aspects of how we connect with others. It encompasses topics on verbal and non-verbal communication, active listening, empathy, conflict resolution, and emotional intelligence. These programs are designed to enhance personal and professional relationships, improve teamwork, and foster a culture of open and constructive dialogue."
  },
  {
    key: "5",
    imageName: "education_pillar_ti.svg",
    text: "Technology & Innovation",
    modalText: "This sector explores the rapidly evolving world of technology and its impact on society. Talks cover emerging technologies such as artificial intelligence, blockchain, and the Internet of Things (IoT), digital literacy, cybersecurity, and ethical considerations in technology use. The focus is on educating individuals about the opportunities and challenges presented by innovation, preparing them for the future digital landscape."
  }
]



function CorporateSolutions() {
  return (
    <div className="max-w-[1920px] text-primary-black">
      {/* <BannerContainer className="flex-col flex items-center justify-center relative w-[100%]">
        <Banner className="w-[100%] lg:w-[80%] xl:w-[60%] 2xl:w-[60%]" src="/corporate_services_banner.jpg" alt='' />
        <BannerText className="sm:absolute sm:bottom-4 md:bottom-5 2xl:bottom-8 text-primary-blue p-1 md:p-2 xl:p-4 rounded cursor-pointer font-bold hover:opacity-90 2xl:text-md bg-white">
          <Link href="contact">CONTACT US</Link>
        </BannerText>
      </BannerContainer> */}

      <div className="w-[100%] relative">
        <Image
          src="/corporate_services_banner.svg"
          width={120}
          height={120}
          layout='responsive'
          alt="bright minds"
          className="mt-[113px] md:mt-[136px] min-[918px]:mt-[-2px]"
        />

        {/* <Link href="/contact/corporate" className="absolute -bottom-4 sm:-bottom-5 left-0 right-0 w-[100px] sm:w-[130px] lg:w-[150px] m-auto bg-white text-center z-10 p-1 sm:p-2 lg:p-3 rounded-md border border-primary-blue hover:scale-95 transition ease-in duration-75 hover:bg-primary-blue hover:text-primary-yellow hover:font-bold text-sm sm:text-md lg:text-xl">
          <div>Contact Us</div>
        </Link> */}
        <MainButton isAbsolute={true} text="Contact Us" />
      </div>

      <div className="m-5">
        <div className="mt-20">
          <Title title='Core Education Pillars' />
          <EducationPillars className={`flex flex-col lg:flex-row lg:flex-wrap mt-10 items-center justify-center`}>
            {educationPillars.map(ep => (
              <EducationPillar key={ep.key} imageName={ep.imageName} text={ep.text} modalText={ep.modalText} />
            ))}
          </EducationPillars>
        </div>

        <div className="">
          <Title title='Why Us' />
          <WhyUs className="flex flex-col lg:flex-row justify-center mt-10 space-y-3 lg:space-y-0 lg:space-x-3 xl:space-x-10 items-center text-center">
            <Why key={1} imageName="why_us_adaptation.svg" text="Adaptation and Navigation" subText="Bright Minds is dedicated to providing education that equips students to navigate the current world, emphasizing skills for adaptation amidst rapid societal changes and technological advancements." />
            <Why key={2} imageName="why_us_empowerment.svg" text="Empowerment Through Student-Centered Learning" subText="Through modern teaching methods, we empower students by making essential skills accessible. Our focus on student-centered learning acknowledges that education is not a one-size-fits-all process, tailoring the learning experience to individual needs." />
            <Why key={3} imageName="why_us_education.svg" text="Supplementing Traditional Education" subText="We recognize the evolving demands on students and aim to supplement traditional education by facilitating the learning of relevant skills. This ensures students are better prepared to face the dynamic challenges of our society." />
          </WhyUs>
        </div>

        <div>
          <Title title='OUR PARTNERS' />
          <div className="mt-16 mb-16">
            <Slider
              width="250px"
              duration={30}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor={'#fff'}
            >
              {partnerData.map(p => (
                <Slider.Slide key={p.imageSrc} className="flex items-center justify-center">
                  <img src={p.imageSrc} alt={p.alt} className='w-30' />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
          <MainButton />
        </div>
      </div>
    </div>
  );
}

export default CorporateSolutions;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const Banner = styled.img`
  /* @media (max-width: 639px) {
    transform: scale(1.5);
  } */
`

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
`
const EducationPillars = styled.div`
`

const WhyUs = styled.div`
`