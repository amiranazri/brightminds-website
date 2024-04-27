"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HorizontalCard from "./ui/components/HorizontalCard";
import skillsList from "../data/skillsList.json";
import heroBanner from "../public/hero.svg";
import ReviewCard from "@/app/ui/components/ReviewCard";
import reviewsData from "@/data/googleReviews.json";

export default function Page() {
  const router = useRouter();

  const handleCourses = () => {
    router.push(`/services`);
  };

  const handleFreeClasses = () => {
    router.push(`/contact/student/free`);
  };

  return (
    <main>
      <div>
        <div style={{ position: "relative" }}>
          <Image
            src={heroBanner}
            width={140}
            height={140}
            layout="responsive"
            alt="bright minds"
            className="mt-16"
          />
        </div>

        <div className="absolute left-16 top-[50%] hidden md:hidden lg:flex flex-col justify-center">
          <button
            onClick={handleCourses}
            className="my-4 bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
          >
            <h6>Our Programs</h6>
          </button>
          <button
            onClick={handleFreeClasses}
            className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]"
          >
            <h6>Free Classes</h6>
          </button>
        </div>

        <div className="flex flex-row justify-center items-center my-8 md:flex-row lg:hidden">
          <button
            onClick={handleCourses}
            className="mr-4 bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full"
          >
            <h6>Our Programs</h6>
          </button>
          <button
            onClick={handleFreeClasses}
            className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full"
          >
            <h6>Free Classes</h6>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4 sm:mt-16 lg:my-16 sm:px-24 md:px-32 lg:px-48">
        <h1 className="text-center">
          Learn practical soft skills from the comfort of your own home
        </h1>
      </div>

      <div className="flex justify-center content-center my-4">
        <div className="flex flex-wrap justify-center sm:w-[80%] md:w-[80%] lg:w-[80%]">
          {skillsList.map((card, index) => (
            <HorizontalCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col py-16 sm:py-4 lg:mt-24 sm:mt-8 sm:px-24 md:px-32 lg:px-48 lg:py-16 lg:bg-white sm:bg-sky-100">
        <h1 className="text-center">What Our Clients Say</h1>
        <h4 className="text-center mt-2 mx-8">
          Empowering Minds, Transforming Communities
        </h4>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row md:flex-wrap lg:flex-wrap justify-center mx-auto pb-16  w-full md:w-[65%]">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            author={review.author}
            date={review.date}
            authorImg={review.authorImg}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>
    </main>
  );
}
