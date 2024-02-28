import React from 'react'

function Footer() {
  return (
    <div className="bg-[#FCFCFC] flex flex-col items-center justify-center">
        <div>image</div>
        <div>
            <div>insta image</div>
            <div>facebook image</div>
            <div>twitter image</div>
        </div>
        <div>
            <div>About</div>
            <div>Portfolio</div>
            <div>Our Services</div>
            <div>Corporate Solutions</div>
            <div>Events</div>
            <div>Contact Us</div>
        </div>
        <div>
            <div>Penang, Malaysia</div>
            <div>{`© ${new Date().getFullYear()} Digital Alchemy. All rights reserved`}</div>
        </div>
    </div>
  )
}

export default Footer