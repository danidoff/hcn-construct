import Image from "next/image";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import sectionsData from "@/data/sections.json";
import styles from "@/styles/ContentPage.module.css";

const detalii = sectionsData.find((s) => s.id === "detalii");

const FAQS = [
    {
        q: "Utilajele sunt proprii sau închiriate de la alte firme?",
        a: "Lucrăm cu flota noastră proprie de excavatoare, autobasculante și utilaje de compactare, întreținută constant.",
    },
    {
        q: "Executați și lucrări mici, sau doar proiecte mari?",
        a: "Executăm atât lucrări mici — săpături punctuale, branșamente — cât și proiecte mari de excavații și terasamente, pentru clienți industriali sau rezidențiali.",
    },
    {
        q: "Oferiți și consultanță pentru alegerea utilajelor potrivite unei lucrări?",
        a: "Da, alături de închirierea utilajelor oferim și consultanță pentru a alege varianta potrivită fiecărei lucrări.",
    },
];

export const metadata = {
    title: "Despre HCN Construct | Firmă de Excavații și Demolări Sibiu",
    description: "HCN Construct execută lucrări de excavații, demolări mecanizate, terasamente și rețele de apă-canal în Sibiu, cu echipă calificată și utilaje performante.",
    alternates: {
        canonical: "/detalii",
    },
    openGraph: {
        title: "Despre HCN Construct | Firmă de Excavații și Demolări Sibiu",
        description: "Echipă calificată, utilaje performante și siguranță pe șantier — cine este HCN Construct.",
        url: "https://www.hcn-construct.ro/detalii",
        siteName: "HCN Construct",
        images: [
            {
                url: "https://www.hcn-construct.ro/images/about.jpg",
                width: 1200,
                height: 630,
                alt: "Despre HCN Construct",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Despre HCN Construct",
        description: "Firmă de excavații, demolări și terasamente în Sibiu.",
        images: ["https://www.hcn-construct.ro/images/about.jpg"],
    },
};

export default function DetaliiPage() {
    return (
        <>
            <Header/>

            <PageHero
                title="Despre HCN Construct"
                intro="Excavații, demolări mecanizate și terasamente pentru clienți industriali și rezidențiali în Sibiu."
            />

            <div className={styles.body}>
                <div className={styles.inner}>
                    <div className={styles.introRow}>
                        <p className={styles.introText}>
                            HCN Construct este o companie din Vestem, Sibiu, specializată în lucrări de excavații,
                            demolări mecanizate și terasamente pentru clienți industriali și rezidențiali. Ne
                            concentrăm pe două lucruri: oamenii și utilajele. Investim continuu în pregătirea
                            echipei și în flota de excavatoare, autobasculante și utilaje de compactare, astfel
                            încât fiecare lucrare — de la săpături de fundație până la rețele de apă-canal — să fie
                            dusă la bun sfârșit în siguranță, la termen și la parametrii conveniți cu clientul.
                        </p>
                        <div className={styles.introImage}>
                            <Image
                                src={detalii.image}
                                alt="Miniexcavator Hitachi al HCN Construct pe teren"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className={styles.grid} style={{"--grid-cols": 3}}>
                        {detalii.listItems.map((group) => (
                            <div key={group.title} className={styles.card}>
                                <h2 className={styles.cardTitle}>{group.title}</h2>
                                <ul className={styles.cardList}>
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className={styles.infoSection}>
                        <h2 className={styles.sectionHeading}>Zona în care lucrăm</h2>
                        <p>
                            Suntem localizați în Vestem, județul Sibiu, și executăm lucrări de excavații, demolări
                            și terasamente în Sibiu și în localitățile din apropiere. Pentru închirierea utilajelor
                            de construcții acoperim întreaga țară, cu sau fără operator.
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
                                {"@type": "ListItem", "position": 2, "name": "Despre Noi", "item": "https://www.hcn-construct.ro/detalii"},
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
