import React from 'react'
import PortfolioCard from "./PortfolioCard";
import Title from "@/app/ui/components/Title"
import PortfolioData from "./portfolioData.json"

function Portfolio() {
  return (
    <div className="max-w-[1920px]">
      {/* Portfolio Cards*/}
      <div className='mt-[170px] lg:mt-[200px]'>
        <Title title='PROJECT PORTFOLIO' />
        <div className="flex flex-wrap items-center justify-center">
          {PortfolioData.map(p => (
            <PortfolioCard key={p.key} imageSrc={p.imageSrc} text={p.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio