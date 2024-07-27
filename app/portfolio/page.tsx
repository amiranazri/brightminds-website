"use client";

import React from "react";
import PortfolioCard from "./PortfolioCard";
import Title from "@/app/ui/components/Title";
import PortfolioData from "./portfolioData.json";
import BlogData from "./blogData.json";
import BlogCard from "./BlogCard";
import Image from "next/image";

function Portfolio() {
  const HeroBlog = BlogData.find(b => b.heroBlog == true);
  return (
    <div className="max-w-[1920px] mx-auto my-24">
      <div className="mt-24 sm:mt-8 md:mt-16">
        <h1 className="mb-16">Project Portfolio</h1>

        <div className="flex flex-wrap items-center justify-center card-container">
          {PortfolioData.map((p) => (
            <PortfolioCard
              key={p.id}
              imageSrc={p.imageSrc}
              // headings={p.content.map((item) => item.heading)}
              title={p.title}
              content={p.content}
              additionalImages={p.additionalImages}
              isComingSoon={p.isComingSoon}
            />
          ))}
        </div>

        <h1 className="mb-16 mt-16">Blog Highlights</h1>

        {HeroBlog && (
          <div className="max-w-[960px] w-full mx-auto p-4">
            <div className="border overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-[300px]">
                <Image src={HeroBlog.imageSrc} layout="fill" objectFit="cover" alt="" />
              </div>
              {/* Content */}
              <div className="p-4 text-center">
                <div className="mb-4 text-lg lines-clamp-3">{HeroBlog.blogSummary}</div>
                <a
                  className="inline-block text-white bg-[#19598F] hover:bg-yellow-300 hover:text-black px-4 py-2 rounded"
                  target="_blank"
                  href={HeroBlog.blogUrl}
                  rel="noopener noreferrer"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center">
          {BlogData.filter(b => b.heroBlog != true).map((b) => (
            <BlogCard
              key={b.id}
              imageSrc={b.imageSrc}
              blogUrl={b.blogUrl}
              blogSummary={b.blogSummary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
