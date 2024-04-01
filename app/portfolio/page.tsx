"use client";

import React from "react";
import PortfolioCard from "./PortfolioCard";
import Title from "@/app/ui/components/Title";
import PortfolioData from "./portfolioData.json";

function Portfolio() {
  return (
    <div className="max-w-[1920px] mx-auto my-24">
      <div className="mt-[170px] lg:mt-[200px]">
        <h1 className="mb-16">Project Portfolio</h1>

        <div className="flex flex-wrap items-center justify-center">
          {PortfolioData.map((p) => (
            <PortfolioCard
              key={p.id}
              imageSrc={p.imageSrc}
              // headings={p.content.map((item) => item.heading)}
              title={p.title}
              content={p.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
