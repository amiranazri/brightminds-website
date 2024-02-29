import React from 'react'

function EducationPillar({imageName="brightminds_logo_1.jpeg", text="test"}) {
  return (
    <div className={`min-w-[250px] min-h-[250px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] flex flex-col items-center justify-between rounded-xl p-2`}>
      <img src={`/${imageName}`} className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]" alt={text} />
      <div className="text-primary-blue font-bold text-xl w-auto text-center h-[80px] md:h-[90px] xl:text-2xl mb-0">{text}</div>
    </div>
  )
}

export default EducationPillar