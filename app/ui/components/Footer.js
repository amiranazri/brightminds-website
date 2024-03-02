import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-[#FCFCFC] flex flex-col items-center justify-center space-y-3 p-2">
        <Image src="/brightminds_logo_2.jpeg" width={220} height={220} alt="Brightminds logo" />
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-5">
            <div>insta image</div>
            <div>facebook image</div>
            <div>twitter image</div>
        </div>
        <div className="text-center flex flex-col md:flex-row md:space-x-5">
            <Link href="/about">
              <div>About</div>
            </Link>
            <Link href="/services">
              <div>Portfolio</div>
            </Link>
            <Link href="/services">
              <div>Our Services</div>
            </Link>
            <Link href="/corporate-solutions">
              <div>Corporate Solutions</div>
            </Link>
            <Link href="/events">
              <div>Events</div>
            </Link>
            <Link href="/contact">
              <div>Contact Us</div>
            </Link>
        </div>
        <div className="text-center space-y-2">
            <div>Penang, Malaysia</div>
            <div>{`© ${new Date().getFullYear()} Digital Alchemy. All rights reserved`}</div>
        </div>
    </div>
  )
}

export default Footer