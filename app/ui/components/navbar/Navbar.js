"use client"

import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.scss'
import {useEffect, useState} from "react";
import styled from 'styled-components';

const Navbar = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image src="/brightminds_logo_1.jpeg" width={100} height={100} className="" alt="Brightminds logo" />
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
                    <Image src="/cross.png" width={30} height={30} className={styles.image} alt="Hamburger Menu Icon" />
                </HamburgerCross>
                :
                <HamburgerCross className="md:hidden cursor-pointer hover:opacity-50 rounded-full items-center" onClick={() => {setHamburgerIsOpen(!hamburgerIsOpen)}}>
                    <Image src="/hamburger.png" width={40} height={40} className={styles.image} alt="Hamburger Menu Icon" />
                </HamburgerCross>
                }
            </div>
            <MenuContainer className="space-y-2" isOpen={hamburgerIsOpen}>
                <Link href="/"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Home</span></Link>
                <Link href="/about"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>About</span></Link>
                <Link href="/services"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Our Services</span></Link>
                <Link href="/corporate-solutions"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Corporate Solutions</span></Link>
                <Link href="/events"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Events</span></Link>
                <Link href="/contact"><span className={styles.buttonMenu} onClick={() => {setHamburgerIsOpen(false)}}>Contact Us</span></Link>
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

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: max-height 0.3s ease-in-out, opacity 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; // Adjust max-height as needed
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  @media (min-width: 768px) {
    display: none;
  }
`;
