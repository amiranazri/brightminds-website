"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import heroBanner from "../../public/events-hero.svg";
import BlogCard from "../ui/components/BlogCard";
import BlogData from "../../data/blog-data.json";

function Events() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <main>
      <Image
        style={{ position: "relative" }}
        src={heroBanner}
        width={140}
        height={140}
        layout="responsive"
        alt="bright minds"
        className="mt-16"
      />

      <div className="hidden sm:block absolute top-[195px] left-[365px] transform -translate-x-1/2 sm:static sm:left-8 sm:top-[80px] lg:absolute lg:left-[124px] lg:top-[43%]">
        <button className="bg-[#19598F] hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-4 rounded-full lg:w-[170px]">
          Learn More
        </button>
      </div>

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
