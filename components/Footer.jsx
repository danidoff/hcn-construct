import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBlock}>
                    <p className={styles.footerTitle}>HCN Construct</p>
                    <address className={styles.address}>
                        Strada Principala, nr.373, Vestem, Sibiu, România
                    </address>
                    <a href="tel:+40740912779">0740 912 779</a>
                </div>

                <nav className={styles.footerBlock} aria-label="Link-uri rapide">
                    <p className={styles.footerTitle}>Link-uri rapide</p>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/detalii">Despre Noi</Link></li>
                        <li><Link href="/servicii">Servicii</Link></li>
                        <li><Link href="/galerie">Galerie</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <p className={styles.copyright}>
                © {new Date().getFullYear()} HCN Construct. Toate drepturile rezervate.
            </p>
        </footer>
    );
}
