"use client";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import ListBlock from "./ListBlock";
import styles from "../styles/SectionContainer.module.css";
import SectionTitle from "@/components/SectionTitle";

export default function SectionContainer({
                                             id,
                                             title,
                                             titleAs,
                                             byTitle,
                                             content,
                                             listItems,
                                             image,
                                             imageAlt,
                                             mapEmbedSrc,
                                         }) {
    const {scrollYProgress} = useScroll();
    const smoothScroll = useSpring(scrollYProgress, {stiffness: 100, damping: 30});
    const y = useTransform(smoothScroll, [0, 1], ["0%", "2%"]);

    const gridCols = listItems ? (listItems.length === 4 ? 2 : listItems.length) : 1;

    return (
        <section id={id} className={styles.section}>
            <SectionTitle title={title} byTitle={byTitle} id={id} as={titleAs}/>
            <motion.div
                style={{y}}
                className={styles.contentContainer}
                initial={{opacity: 0, y: 32}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.6, ease: "easeOut"}}
            >
                {(content || listItems) && (
                    <div className={styles.textContainer}>
                        {content && <p className={styles.sectionText}>{content}</p>}

                        {/* If there's a list to render, show it as a card grid */}
                        {listItems && (
                            <div className={styles.grid} style={{"--grid-cols": gridCols}}>
                                {listItems.map((listObj, index) => (
                                    <div key={index} className={styles.card}>
                                        <ListBlock title={listObj.title} items={listObj.items} as="h3"/>
                                    </div>
                                ))}
                            </div>
                        )}

                        {mapEmbedSrc && (
                            <a href="tel:+40740912779" className={styles.ctaButton}>📞 Sună acum</a>
                        )}
                    </div>
                )}

                {/* Google Maps embed (contact section) takes priority over a static image */}
                {mapEmbedSrc && (
                    <div className={styles.imageContainer}>
                        <iframe
                            src={mapEmbedSrc}
                            className={styles.mapEmbed}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Locația HCN Construct pe Google Maps"
                        />
                    </div>
                )}

                {/* IMAGE on the right (if any) — only when there's no card grid to fill the row instead */}
                {!mapEmbedSrc && !listItems && image && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.actualImage}
                            src={image}
                            alt={imageAlt || title}
                            width={600}
                            height={400}
                        />
                    </div>

                )}
            </motion.div>
        </section>
    );
}
