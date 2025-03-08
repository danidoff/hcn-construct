"use client";
import styles from "/styles/ListBlock.module.css";

export default function ListBlock({ title, items = [] }) {
    return (
        <div className={styles.listContainer}>
            <h2 className={styles.listTitle}>{title}</h2>
            <ul className={styles.list}>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
