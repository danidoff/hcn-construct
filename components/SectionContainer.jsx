"use client";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import ListBlock from "./ListBlock";
import styles from "../styles/SectionContainer.module.css";
import SectionTitle from "@/components/SectionTitle";
import Carousel from "@/components/Carousel";

export default function SectionContainer({
                                             id,
                                             title,
                                             byTitle,
                                             content,
                                             listItems,
                                             image,
                                             images,
                                         }) {
    const {scrollYProgress} = useScroll();
    const smoothScroll = useSpring(scrollYProgress, {stiffness: 100, damping: 30});
    const y = useTransform(smoothScroll, [0, 1], ["0%", "2%"]);

    return (
        <section id={id} className={styles.section}>
            <SectionTitle title={title} byTitle={byTitle} id={id}/>
            <motion.div style={{y}} className={styles.contentContainer}>
                { (content || listItems) && (
                    <div className={styles.textContainer}>
                        {content && <p className={styles.sectionText}>{content}</p>}

                        {/* If there's a list to render */}
                        {listItems &&
                            listItems.map((listObj, index) => (
                                <ListBlock key={index} title={listObj.title} items={listObj.items}/>
                            ))}
                    </div>
                )
                    
                }

                {/* IMAGE on the right (if any) */}
                {image && id !== "galerie" && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.actualImage}
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                            priority
                        />
                    </div>
                    
                )}

                {/* Example of a Carousel if we are in "gallery" */}
                {id === "galerie" && images?.length > 0 && <Carousel images={images}/>}
            </motion.div>
        </section>
    );
}
