import Image from "next/image";
import HorizontalCard from "./ui/components/horizontalCard/HorizontalCard";
import skillsList from "../data/skillsList.json";
import heroBanner from "../public/hero.png";

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

      <div className="flex justify-center mt-24 sm:px-24 md:px-32 lg:px-48">
        <h1>Learn practical soft skills from the comfort of your own home</h1>
      </div>
      <div className="flex justify-center content-center my-24">
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
    </main>
  );
}
