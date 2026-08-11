import styles from "@/styles/PageHero.module.css";

export default function PageHero({title, intro}) {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>{title}</h1>
            {intro && <p className={styles.intro}>{intro}</p>}
        </section>
    );
}
