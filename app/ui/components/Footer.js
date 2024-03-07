import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#F7F7F7] flex flex-col items-center justify-center space-y-3 p-2 text-gray-600">
      <Image
        src="/brightminds_logo_2.jpeg"
        width={220}
        height={220}
        alt="Brightminds logo"
      />
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-5">
        <Link href="https://www.instagram.com/brightmindsedu/" target="_blank">
          <Image src="/instagram_icon.svg" width={50} height={50} className="cursor-pointer mb-5 hover:opacity-80" />
        </Link>
        <Link href="https://www.facebook.com/Brightmindsorg" target="_blank">
          <Image src="/facebook_icon.svg" width={50} height={50} className="cursor-pointer mb-5 hover:opacity-80" />
        </Link>
        <Link href="https://www.linkedin.com/company/brightminds-edu/" target="_blank">
          <Image src="/twitter_icon.svg" width={50} height={50} className="cursor-pointer mb-5 hover:opacity-80" />
        </Link>
      </div>
      <div className="text-center flex flex-col md:flex-row md:space-x-5">
        <Link href="/about" className="hover:opacity-80">
          <div>About</div>
        </Link>
        <Link href="/services" className="hover:opacity-80">
          <div>Portfolio</div>
        </Link>
        <Link href="/services" className="hover:opacity-80">
          <div>Our Services</div>
        </Link>
        <Link href="/corporate-solutions" className="hover:opacity-80">
          <div>Corporate Solutions</div>
        </Link>
        <Link href="/events" className="hover:opacity-80">
          <div>Events</div>
        </Link>
        <Link href="/contact" className="hover:opacity-80">
          <div>Contact Us</div>
        </Link>
      </div>
      <div className="text-center space-y-2">
        <div>Ipoh, Malaysia</div>
        <div>{`© ${new Date().getFullYear()} Digital Alchemy. All rights reserved`}</div>
      </div>
    </div>
  );
}

export default Footer;
