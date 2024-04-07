"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogCard from "../ui/components/BlogCard";
import BlogData from "../../data/blog-data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Events() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const carouselImages = [
    <Image
      key="event1"
      src={"/coding_banner.jpg"}
      width={140}
      height={140}
      layout="responsive"
      alt="bright minds"
    />,
    <Image
      key="event2"
      src={"/critical_thinking_banner.jpg"}
      width={140}
      height={140}
      layout="responsive"
      alt="photo1"
    />,
    <Image
      key="event3"
      src={"/debate_club.jpg"}
      width={140}
      height={140}
      layout="responsive"
      alt="photo2"
    />,
    <Image
      key="event4"
      src={"/financial_literacy_banner.jpg"}
      width={140}
      height={140}
      layout="responsive"
      alt="photo3"
    />,
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
      <style jsx>{`
        .image-container {
          position: relative;
          width: 100vw;
        }

        .image-container > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .button-container {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1; /* Ensure the button appears above the images */
        }

        @media screen and (max-width: 1024px) {
          .button-container {
            bottom: 5%;
          }
        }
      `}</style>
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
        transitionDuration={600}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="image-container">
            {image}
            <div className="button-container">
              <button className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]">
                Learn More
              </button>
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
