"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "../styles/HeroSection.module.css"; // We'll define new styles
import SectionTitle from "@/components/SectionTitle";

export default function HeroSection({ id, title, byTitle, content, image }) {
    // Example of hooking into scroll if you want a parallax:
    const { scrollYProgress } = useScroll();
    // Smooth parallax effect
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    // Move background image or text as user scrolls
    const y = useTransform(smoothScroll, [0, 1], ["0%", "5%"]);

    return (
        <section
            id={id}
            className={styles.heroSection}
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            {/* If you want to parallax the entire content: */}
            <motion.div style={{ y }} className={styles.overlay}>
                <SectionTitle title={title} byTitle={byTitle} id={id} />
                <p className={styles.heroContent}>{content}</p>
            </motion.div>
        </section>
    );
}
