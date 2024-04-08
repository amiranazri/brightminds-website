"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  function navLinkCss(pathArr) {
    if (pathArr.includes(pathname))
      return `md:bg-transparent bg-primary-blue md:text-primary-blue text-white ${
        navbarScroll ? "md:text-primary-yellow font-bold" : ""
      }`;
    else
      return `text-gray-900 hover:bg-gray-100 md:hover:underline md:underline-offset-8 ${
        navbarScroll
          ? "md:text-white md:hover:text-primary-yellow"
          : "md:hover:text-primary-blue"
      }`;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`${
        navbarScroll ? "bg-primary-blue" : "bg-white"
      } transition ease-in delay:250 shadow-2xl border-gray-200 fixed w-full z-50 top-0 start-0`}
    >
      <div className="z-auto max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={"/bm_icon.png"}
            width={48}
            height={48}
            alt="Brightminds Logo"
          />
          <span
            className={`${
              navbarScroll ? "text-white" : "text-primary-blue"
            } transition-colors ease-in delay:250 self-center text-xl font-semibold whitespace-nowrap`}
          >
            Brightminds
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden ${
            navbarScroll
              ? "text-white hover:bg-black"
              : "text-gray-500 hover:bg-gray-100"
          }`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`max-md:bg-gray-50 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 transition-none`}
          >
            <li>
              <Link
                onClick={toggleMenu}
                href="/"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  ["/"]
                )}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/about"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  ["/about"]
                )}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/portfolio"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  ["/portfolio"]
                )}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/services"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  ["/services"]
                )}`}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/corporate-solutions"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  ["/corporate-solutions"]
                )}`}
              >
                Corporate Solutions
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/events"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  ["/events"]
                )}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/contact/general"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 ${navLinkCss(
                  [
                    "/contact/general",
                    "/contact/corporate",
                    "/contact/school",
                    "/contact/student",
                  ]
                )}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
