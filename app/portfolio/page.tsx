import React from 'react'
import PortfolioCard from "./PortfolioCard";
import Title from "@/app/ui/components/Title"

function Portfolio() {
  return (
    <div className="max-w-[1920px]">
      {/* Portfolio Cards*/}
      <div className='mt-[113px] md:mt-[136px] min-[918px]:mt-[-2px]'>
        <Title title='PROJECT PORTFOLIO' />
        <PortfolioCard />
      </div>
    </div>
  )
}

export default Portfolio