"use client"

import React from 'react'
import styled from 'styled-components';

function Title({title="", subTitle=""}) {
  return (
    <>
        <TitleText className="text-center mt-10 text-xs sm:text-4xl lg:text-4xl font-bold text-[#092135]">{title}</TitleText>
        {subTitle && <SubTitleText>{subTitle}</SubTitleText>}
    </>
  )
}

export default Title

const TitleText = styled.div`

    @media (max-width: 639px) {
      font-size: 1.875rem; /* 30px */
      line-height: 2.25rem; /* 36px */
    }
`
const SubTitleText = styled.div`

`