import Image from "next/image";
import HorizontalCard from "./ui/components/horizontalCard/HorizontalCard";

export default function Page() {
  return (
    <main>
      <HorizontalCard
        imageUrl="/img/card-left.jpg"
        title="Can coffee make you a better developer?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
      />
    </main>
  );
}
