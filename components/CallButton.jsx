import styles from "@/styles/CallButton.module.css";

export default function CallButton() {
    return (
        <a href="tel:+40740912779" className={styles.callButton} aria-label="Sună acum: 0740 912 779">
            <span className={styles.icon} aria-hidden="true">📞</span>
            <span className={styles.label}>Sună acum</span>
        </a>
    );
}
