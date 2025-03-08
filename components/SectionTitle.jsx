"use client";

import styles from '@/styles/SectionTitle.module.css';
import {motion} from "framer-motion";

export default function SectionTitle({title}) {    
    return (
            <motion.div className={styles.titleContainer}>
                <h1 className={styles.title}>{title}</h1>
            </motion.div>
    );
}