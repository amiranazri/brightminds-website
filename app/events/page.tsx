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
      />

      <div
        style={{
          position: "absolute",
          top: "140px",
          left: "20px",
        }}
      >
        <button className="absolute top-72 left-8 bg-white text-black hover:bg-[#19598F] hover:text-white px-4 py-2 w-40 rounded">
          Learn More
        </button>
      </div>

      <div className="flex justify-center my-16 sm:px-24 md:px-32 lg:px-48">
        <h1 className="text-center">What's New At Brightminds</h1>
      </div>

      <div className="mb-16">
        <BlogCard blogData={BlogData} handleNavigation={handleNavigation} />
      </div>
    </main>
  );
}

export default Events;
