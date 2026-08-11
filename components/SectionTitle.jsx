"use client";

import styles from '@/styles/SectionTitle.module.css';
import {motion} from "framer-motion";

export default function SectionTitle({title, as: Tag = 'h2'}) {
    return (
            <motion.div className={styles.titleContainer}>
                <Tag className={styles.title}>{title}</Tag>
            </motion.div>
    );
}