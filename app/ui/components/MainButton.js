import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

function MainButton({text="PARTNER WITH US"}) {
  return (
    <div className="text-center bg-primary-blue w-[200px] text-white mx-auto p-2 rounded-md cursor-pointer hover:opacity-80 focus:scale-95" style={{transition: "opacity 0.5s ease"}}>
        <Link href="contact/corporate">{text}</Link>
    </div>
  )
}

export default MainButton