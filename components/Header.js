"use client";

import { useState } from "react";
import styles from '@/styles/Header.module.css';
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu on button click
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking a link
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Logo */}
                <div className={styles.logo}>
                    <a href="#home" onClick={closeMenu}>
                        <Image src={"/images/logo.jpg"} alt={"HCN Construct"} width={40} height={40} priority/>
                    </a>
                </div>

                {/* Hamburger Menu Button */}
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>

                {/* Navigation Menu */}
                <ul className={`${styles.navList} ${menuOpen ? styles.navOpen : ""}`}>
                    {/*<li><a href="#home" onClick={closeMenu}>Acasă</a></li>*/}
                    <li><a href="#about" onClick={closeMenu}>Despre Noi</a></li>
                    <li><a href="#services" onClick={closeMenu}>Servicii</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portofoliu</a></li>
                    <li><a href="#courses" onClick={closeMenu}>Cursuri</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
