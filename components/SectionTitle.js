"use client";

import styles from '@/styles/SectionTitle.module.css';
import {motion} from "framer-motion";

export default function SectionTitle({title, byTitle, id}) {    
    return (id === 'home' ?
            <motion.div className={styles.homeTitleContainer}>
                <p className={styles.homeTitle}>{title}</p>
                {/*<p className={styles.homeSubtitle} style={{marginLeft: 160}}>{byTitle}</p>*/}
            </motion.div> :
            <motion.div className={styles.titleContainer}>
                <h1 className={styles.title}>{title}</h1>
            </motion.div>
    );
}