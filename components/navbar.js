// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/your-logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Your Company</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
          <Link href="/services">
            <a className="nav-link">Our Services</a>
          </Link>
          <Link href="/corporate-solutions">
            <a className="nav-link">Corporate Solutions</a>
          </Link>
          <Link href="/events">
            <a className="nav-link">Events</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link">Contact Us</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
