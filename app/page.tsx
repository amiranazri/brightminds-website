import Image from "next/image";
import HorizontalCard from "./ui/components/HorizontalCard";
import skillsList from "../data/skillsList.json";
import heroBanner from "../public/hero.png";
import ReviewCard from "@/app/ui/components/ReviewCard";
import reviewsData from "@/data/googleReviews.json";

export default function Page() {
  return (
    <main>
      <Image
        src={heroBanner}
        width={140}
        height={140}
        layout="responsive"
        alt="bright minds"
      />

      <div className="flex justify-center lg:my-16 sm:px-24 md:px-32 lg:px-48">
        <h1 className="text-center">
          Learn practical soft skills from the comfort of your own home
        </h1>
      </div>
      <div className="flex justify-center content-center my-8">
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
      <div className="flex justify-center items-center flex-col lg:mt-24 sm:mt-8 sm:px-24 md:px-32 lg:px-48">
        <h1 className="text-center">What Our Clients Say</h1>
        <h4 className="text-center mt-2 mx-8">
          Unlocking Potential, Inspiring Joy: Hear the Voices of Our Satisfied
          Families
        </h4>
      </div>

      <div className="flex flex-col items-center sm:px-4 md:flex-row lg:flex-row lg:px-16 ">
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
