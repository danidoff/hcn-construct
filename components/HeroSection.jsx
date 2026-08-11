"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "../styles/HeroSection.module.css";
import SectionTitle from "@/components/SectionTitle";

export default function HeroSection({ id, title, byTitle, content, image, fleetCount }) {
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
            <div className={styles.scrim} />

            <motion.div
                style={{ y }}
                className={styles.overlay}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <p className={styles.tagline}>Excavații • Demolări • Terasamente • Închiriere utilaje</p>
                <SectionTitle title={title} byTitle={byTitle} id={id} as="h1" light />
                <p className={styles.heroContent}>{content}</p>

                <div className={styles.ctaRow}>
                    <a href="tel:+40740912779" className={styles.ctaPrimary}>📞 Sună acum</a>
                    <a href="/contact" className={styles.ctaSecondary}>Cere o ofertă</a>
                </div>

                <div className={styles.statRow}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{fleetCount}+</span>
                        <span className={styles.statLabel}>utilaje în flotă</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>Vestem</span>
                        <span className={styles.statLabel}>Sibiu</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>Județul Sibiu</span>
                        <span className={styles.statLabel}>zonă de lucru</span>
                    </div>
                </div>
            </motion.div>

            <a href="#detalii" className={styles.scrollCue} aria-label="Vezi mai multe">
                <span className={styles.scrollChevron} />
            </a>
        </section>
    );
}
