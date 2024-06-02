"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogCard from "../ui/components/BlogCard";
import BlogData from "../../data/blog-data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./events.module.css";

function Events() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLearnMore = () => {
    router.push(`/contact/student`);
  };

  const carouselImages = [
    {
      image: "/coding_banner.jpg",
      title: "Coding for Kids Workshop",
      subtitle:
        "Join our Coding for Kids Workshop and introduce your child to the exciting world of programming with our experienced instructor there to guide.",
    },
    {
      image: "/critical_thinking_banner.jpg",
      title: "Critical Thinking Workshop",
      subtitle:
        "Our Critical Analysis course equips students with the essential skills to think critically and analyze information effectively through engaging activities and discussions.",
    },
    {
      image: "/debate_club.jpg",
      title: "Debate Club",
      subtitle:
        "Our Debate club cultivates students' critical thinking, research, and argumentation skills through structured debates on relevant topics.",
    },
    {
      image: "/financial_literacy_banner.jpg",
      title: "Financial Literacy Workshop",
      subtitle:
        "In our Financial Literacy course, students develop a foundational understanding of financial concepts such as budgeting, saving, investing, and managing debt.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
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
    <main>
      <Carousel
        arrows={true}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        slidesToSlide={1}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        containerClass={`carousel-container ${styles.carouselContainer}`}
        className="sm:mt-16 mt-16"
      >
        {carouselImages.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} flex flex-col-reverse lg:flex-row`}
          >
            <div className={`${styles.textColumn} w-full lg:w-1/2`}>
              <h1 className="lg:px-8 md:px-4 sm:px-4 text-center lg:text-left responsive-text">
                {item.title}
              </h1>
              <p className="lg:px-8 md:px-4 sm:px-4 text-center lg:text-left">
                {item.subtitle}
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleLearnMore}
                  className="my-8 mx-8 bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
                >
                  <h6>Learn More</h6>
                </button>
              </div>
            </div>
            <div className={`${styles.imageColumn} w-full lg:w-1/2`}>
              <Image
                src={item.image}
                layout="responsive"
                width={700}
                height={475}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center my-16 sm:px-24 md:px-32 lg:px-48">
        <h1 className="text-center">{`What's New At Brightminds`}</h1>
      </div>

      <div className="mb-16 mx-4">
        <BlogCard blogData={BlogData} handleNavigation={handleNavigation} />
      </div>
    </main>
  );
}

export default Events;
