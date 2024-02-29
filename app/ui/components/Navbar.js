"use client"

import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.scss'
import {useEffect, useState} from "react";
import styled from 'styled-components';

const Navbar = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    return (
        <nav className="shadow-2xl fixed top-0 left-0 w-[100%] z-10 bg-white">
          {/* container mx-auto px-4 py-2 flex items-center justify-between max-w-7xl text-xl */}
            <div className="flex items-center justify-between text-md px-4 py-2 max-w-7xl text-lg mx-auto">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <img src="/brightminds_logo_1.jpeg" className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt="Brightminds logo" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:block md:space-x-4 lg:space-x-8 xl:space-x-10 text-black">
                    <Link href="/"><span className={styles.button}>Home</span></Link>
                    <Link href="/about"><span className={styles.button}>About</span></Link>
                    <Link href="/services"><span className={styles.button}>Our Services</span></Link>
                    <Link href="/corporate-solutions"><span className={styles.button}>Corporate Solutions</span></Link>
                    <Link href="/events"><span className={styles.button}>Events</span></Link>
                    <Link href="/contact"><span className={styles.button}>Contact Us</span></Link>
                </div>

                {hamburgerIsOpen ? 
                <HamburgerCross className="md:hidden cursor-pointer hover:opacity-50 rounded-full items-center" onClick={() => {setHamburgerIsOpen(!hamburgerIsOpen)}}>
                    {/* <Image src="/cross.png" width={30} height={30} className={styles.image} alt="Hamburger Menu Icon" /> */}
                    <img src="/cross.png" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" alt="Hamburger Menu Icon" />
                </HamburgerCross>
                :
                <HamburgerCross className="md:hidden cursor-pointer hover:opacity-50 rounded-full items-center" onClick={() => {setHamburgerIsOpen(!hamburgerIsOpen)}}>
                    {/* <Image src="/hamburger.png" width={40} height={40} className={styles.image} alt="Hamburger Menu Icon" /> */}
                    <img src="/hamburger.png" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" alt="Hamburger Menu Icon" />
                </HamburgerCross>
                }
            </div>
            <MenuContainer className="space-y-2" $isOpen={hamburgerIsOpen}>
                <Link href="/" className="flex justify-center w-[100%] center"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Home</span></Link>
                <Link href="/about" className="flex justify-center w-[100%]"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>About</span></Link>
                <Link href="/services" className="flex justify-center w-[100%]"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Our Services</span></Link>
                <Link href="/corporate-solutions" className="flex justify-center w-[100%]"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Corporate Solutions</span></Link>
                <Link href="/events" className="flex justify-center w-[100%]"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Events</span></Link>
                <Link href="/contact" className="flex justify-center w-[100%]"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Contact Us</span></Link>
            </MenuContainer>
        </nav>
    );
};

export default Navbar;

const HamburgerCross = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    display: none;
  }
`

// const MenuContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     transition: max-height 0.3s ease-in-out, opacity 0.5s ease;
//     max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; // Adjust max-height as needed
//     opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
//     overflow: hidden;
//     @media (min-width: 768px) {
//         display: none;
//     }
// `;

const MenuContainer = styled.div`
  position: absolute; // Position the menu absolutely
  left: 0;
  right: 0; // Stretch the menu across the full width of the navbar
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white; // Set a background color to make the menu visible over the content
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); // Optional: adds a shadow to the menu for better separation */
  transition: max-height 0.3s ease-in-out, opacity 0.5s ease;
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')}; // Adjust max-height as needed
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;
  z-index: 10; // Ensure the menu is above other content
  @media (min-width: 768px) {
    display: none;
  }
`;
