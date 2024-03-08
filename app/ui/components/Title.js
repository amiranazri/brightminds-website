"use client"

import React from 'react'
import styled from 'styled-components';

function Title({title="", subTitle=""}) {
  return (
    <>
        <TitleText className="text-center mt-10 text-2xl sm:text-4xl lg:text-4xl font-bold text-primary-black">{title}</TitleText>
        {subTitle && <SubTitleText>{subTitle}</SubTitleText>}
    </>
  )
}

export default Title

const TitleText = styled.div`

`
const SubTitleText = styled.div`

`