"use client";
import styles from "../styles/ListBlock.module.css";

export default function ListBlock({title, items = [], as: Tag = 'h2'}) {
    return (
        <div className={styles.listContainer}>
            <Tag className={styles.listTitle}>{title}</Tag>
            <ul className={styles.list}>
                {items.map((item, idx) => {
                    if (item.startsWith("Telefon")) {
                        const phoneNumber = item.replace("Telefon:", "").trim();
                                                   
                        return <li key={idx}>
                             <a href={`tel:+4${phoneNumber.replace(/\s/g, "")}`}>
                                 📞 Telefon: {phoneNumber}
                            </a>
                        </li>
                    }
                    else {
                        return (
                            <li key={idx}>{item}</li>
                        );
                    }

                    
                })}
            </ul>
        </div>
    );
}
