"use client";

import React from "react";
import PortfolioCard from "./PortfolioCard";
import Title from "@/app/ui/components/Title";
import PortfolioData from "./portfolioData.json";
import BlogData from "./blogData.json";
import BlogCard from "./BlogCard";

function Portfolio() {
  return (
    <div className="max-w-[1920px] mx-auto my-24">
      <div className="mt-24 md:mt-16">
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

        <div className="flex flex-wrap items-center justify-center">
          {BlogData.map((b) => (
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
