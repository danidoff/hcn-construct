"use client";

import {useState} from "react";
import styles from "/styles/Header.module.css"; // adjust if needed
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle overlay
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Close overlay
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Logo */}
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="HCN Construct"
                            width={160}
                            height={80}
                            priority
                        />
                    </Link>
                </div>

                {/* Hamburger for mobile (but also appears on desktop if you like) */}
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {/* If overlay is open, show X; otherwise show ☰ */}
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Desktop nav */}
                <ul className={styles.navListDesktop}>
                    <li><Link href="/detalii">Despre Noi</Link></li>
                    <li><Link href="/servicii">Servicii</Link></li>
                    <li><Link href="/galerie">Utilajele noastre</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* 100% overlay nav for mobile */}
            <div
                className={`${styles.mobileNav} ${menuOpen ? styles.navOpen : ""}`}
                onClick={closeMenu}
            >
                {/* 
          Stop propagation so clicking inside doesn't close it automatically.
          Put everything in an inner wrapper so you can place the close button 
          top-right or anywhere you want within the overlay.
        */}
                <div className={styles.mobileNavContent} onClick={(e) => e.stopPropagation()}>
                    {/* X in top-right corner for closing the overlay */}
                    <button className={styles.closeButton} onClick={closeMenu}>
                        ✕
                    </button>

                    <ul className={styles.mobileNavList}>
                        <li>
                            <Link href="/" onClick={closeMenu}>
                                <Image
                                    src="/images/logo.png"
                                    alt="HCN Construct"
                                    width={160}
                                    height={80}
                                    priority
                                />
                            </Link>
                        </li>
                        <li><Link href="/detalii" onClick={closeMenu}>Despre Noi</Link></li>
                        <li><Link href="/servicii" onClick={closeMenu}>Servicii</Link></li>
                        <li><Link href="/galerie" onClick={closeMenu}>Utilajele noastre</Link></li>
                        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
