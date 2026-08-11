import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import sectionsData from "@/data/sections.json";
import styles from "@/styles/ContentPage.module.css";

const contact = sectionsData.find((s) => s.id === "contact");

const MAP_EMBED_SRC =
    "https://www.google.com/maps?q=Strada+Principala+373,+Vestem,+Sibiu,+Romania&output=embed";

const FAQS = [
    {
        q: "Care este cel mai rapid mod de a vă contacta?",
        a: "Telefonic, la 0740 912 779 — răspundem rapid la apeluri și mesaje.",
    },
    {
        q: "Pot vizita sediul din Vestem?",
        a: "Da, ne găsești pe Strada Principala, nr. 373, Vestem, Sibiu. Recomandăm să suni înainte, ca să te poată aștepta cineva disponibil.",
    },
    {
        q: "Ce informații ar trebui să am pregătite când sun?",
        a: "E util să știi tipul lucrării (excavații, demolări, închiriere utilaje), locația și, dacă se poate, suprafața sau dimensiunile aproximative — ne ajută să-ți dăm o estimare mai rapidă.",
    },
];

export const metadata = {
    title: "Contact HCN Construct | Excavații și Demolări Sibiu, Vestem",
    description: "Contactează HCN Construct pentru oferte de excavații, demolări și închiriere utilaje. Telefon 0740 912 779, Vestem, Sibiu. Răspundem rapid!",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact HCN Construct | Excavații și Demolări Sibiu, Vestem",
        description: "Telefon 0740 912 779, Vestem, Sibiu. Cere o ofertă pentru lucrări de excavații și demolări.",
        url: "https://www.hcn-construct.ro/contact",
        siteName: "HCN Construct",
        images: [
            {
                url: "https://www.hcn-construct.ro/images/contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact HCN Construct",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact HCN Construct",
        description: "Telefon 0740 912 779, Vestem, Sibiu.",
        images: ["https://www.hcn-construct.ro/images/contact.jpg"],
    },
};

export default function ContactPage() {
    return (
        <>
            <Header/>

            <PageHero
                title="Contact"
                intro="Ai un proiect de excavații, demolări, terasamente sau ai nevoie de utilaje de construcții? Sună-ne sau vino la sediul din Vestem."
            />

            <div className={styles.body}>
                <div className={styles.inner}>
                    <div className={styles.contactRow}>
                        <div className={styles.napCard}>
                            <h2>Suntem aici pentru tine!</h2>
                            <ul className={styles.napList}>
                                <li>
                                    📞 <a href="tel:+40740912779">0740 912 779</a>
                                </li>
                                <li>
                                    📍 Strada Principala, nr.373, Vestem, Sibiu, România
                                </li>
                            </ul>
                        </div>
                        <div className={styles.mapWrap}>
                            <iframe
                                src={MAP_EMBED_SRC}
                                className={styles.mapEmbed}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Locația HCN Construct pe Google Maps"
                            />
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionHeading}>Zonă deservită</h2>
                        <p>
                            Executăm lucrări în Sibiu și în tot județul Sibiu. Pentru închirierea utilajelor de
                            construcții, cu sau fără operator, acoperim întreaga țară.
                        </p>
                    </div>

                    <div className={styles.faqSection}>
                        <h2 className={styles.sectionHeading}>Întrebări frecvente</h2>
                        {FAQS.map((item) => (
                            <div key={item.q} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{item.q}</h3>
                                <p className={styles.faqAnswer}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {"@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://www.hcn-construct.ro/"},
                                {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.hcn-construct.ro/contact"},
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": FAQS.map((item) => ({
                                "@type": "Question",
                                "name": item.q,
                                "acceptedAnswer": {"@type": "Answer", "text": item.a},
                            })),
                        },
                    ]),
                }}
            />
        </>
    );
}
