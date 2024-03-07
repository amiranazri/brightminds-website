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

function CorporateSolutions() {
  return (
    <div className="max-w-[1920px]">
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

        <Link href="/contact" className="absolute -bottom-4 sm:-bottom-5 left-0 right-0 w-[100px] sm:w-[130px] lg:w-[150px] m-auto bg-white text-center z-10 p-1 sm:p-2 lg:p-3 rounded-md border border-primary-blue hover:scale-95 transition ease-in duration-75 hover:bg-primary-blue hover:text-primary-yellow hover:font-bold text-sm sm:text-md lg:text-xl">
          <div>Contact Us</div>
        </Link>
      </div>

      <div className="m-5">
        <div className="mt-20">
          <Title title='Core Education Pillars' />
          <EducationPillars className={`flex flex-col lg:flex-row lg:flex-wrap mt-10 items-center justify-center`}>
            <EducationPillar key={1} imageName="education_pillar_es.svg" text="Environmental Sustainability" />
            <EducationPillar key={2} imageName="education_pillar_feae.svg" text="Financial Education & Empowerment" />
            <EducationPillar key={3} imageName="education_pillar_haw.svg" text="Health & Wellness" />
            <EducationPillar key={4} imageName="education_pillar_ecis.svg" text="Effective Communication & Interpersonal Skills" />
            <EducationPillar key={5} imageName="education_pillar_ti.svg" text="Technology & Innovation" />
          </EducationPillars>
        </div>

        <div className="">
          <Title title='Why Us' />
          <WhyUs className="flex flex-col lg:flex-row justify-center mt-10 space-y-3 lg:space-y-0 lg:space-x-3 xl:space-x-10 items-center text-center">
            <Why key={1} imageName="why_us_adaptation.svg" text="Adaptation and Navigation" subText="Bright Minds is dedicated to providing education that equips students to navigate the current world, emphasizing skills for adaptation amidst rapid societal changes and technological advancements." />
            <Why key={1} imageName="why_us_empowerment.svg" text="Empowerment Through Student-Centered Learning" subText="Through modern teaching methods, we empower students by making essential skills accessible. Our focus on student-centered learning acknowledges that education is not a one-size-fits-all process, tailoring the learning experience to individual needs." />
            <Why key={1} imageName="why_us_education.svg" text="Supplementing Traditional Education" subText="We recognize the evolving demands on students and aim to supplement traditional education by facilitating the learning of relevant skills. This ensures students are better prepared to face the dynamic challenges of our society." />
          </WhyUs>
        </div>

        <div>
          <Title title='OUR PARTNERS' />
          <div className="mt-16 mb-16">
            <Slider
              width="200px"
              duration={30}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor={'#fff'}
            >
              <Slider.Slide>
                <img src="/partner1.jpg" alt="any" className='w-20' />
              </Slider.Slide>
              <Slider.Slide>
                <img src="/partner2.jpg" alt="any2" className='w-20' />
              </Slider.Slide>
              <Slider.Slide>
                <img src="/partner3.jpg" alt="any3" className='w-20' />
              </Slider.Slide>
              <Slider.Slide>
                <img src="/partner4.jpg" alt="any3" className='w-20' />
              </Slider.Slide>
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