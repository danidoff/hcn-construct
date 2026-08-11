import Link from "next/link";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import sectionsData from "@/data/sections.json";
import styles from "@/styles/ContentPage.module.css";

const servicii = sectionsData.find((s) => s.id === "servicii");

export const metadata = {
    title: "Servicii Excavații, Demolări și Terasamente Sibiu | HCN Construct",
    description: "Servicii complete de excavații, demolări mecanizate, terasamente și închiriere utilaje în Sibiu și împrejurimi. Utilaje performante, personal calificat.",
    alternates: {
        canonical: "/servicii",
    },
    openGraph: {
        title: "Servicii Excavații, Demolări și Terasamente Sibiu | HCN Construct",
        description: "Demolări mecanizate, excavații, terasamente și închiriere utilaje de construcții în Sibiu.",
        url: "https://www.hcn-construct.ro/servicii",
        siteName: "HCN Construct",
        images: [
            {
                url: "https://www.hcn-construct.ro/images/services.jpg",
                width: 1200,
                height: 630,
                alt: "Servicii HCN Construct",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicii HCN Construct - Excavații, Demolări, Terasamente",
        description: "Servicii complete de excavații, demolări și terasamente în Sibiu.",
        images: ["https://www.hcn-construct.ro/images/services.jpg"],
    },
};

const FAQS = [
    {
        q: "Lucrați și pentru clienți rezidențiali, nu doar pentru firme?",
        a: "Da. Executăm lucrări de excavații, demolări și terasamente atât pentru proiecte industriale, cât și pentru case și terenuri rezidențiale.",
    },
    {
        q: "Oferiți utilaje de construcții cu operator sau doar la închiriere simplă?",
        a: "Ambele variante sunt disponibile: închiriem utilaje cu sau fără deservent, în funcție de nevoile șantierului.",
    },
    {
        q: "Ce zonă deserviți?",
        a: "Suntem localizați în Vestem, Sibiu, și lucrăm în tot județul Sibiu; pentru închirierea utilajelor de construcții acoperim toată țara.",
    },
    {
        q: "Cum pot obține o ofertă de preț?",
        a: "Ne puteți contacta telefonic sau prin pagina de contact cu detalii despre lucrare; vă transmitem o estimare după ce înțelegem specificul șantierului.",
    },
];

export default function ServiciiPage() {
    return (
        <>
            <Header/>

            <SectionContainer
                id="servicii"
                title="Servicii de Excavații, Demolări și Terasamente în Sibiu"
                titleAs="h1"
                content="HCN Construct oferă servicii complete de demolări mecanizate, excavații și terasamente pentru proiecte industriale și rezidențiale în Sibiu și împrejurimi. Investim permanent în flota de utilaje și în pregătirea echipei, astfel încât fiecare lucrare să fie executată la standarde ridicate de siguranță și profesionalism, la termenele stabilite cu clientul."
                listItems={servicii.listItems}
                image={servicii.image}
                imageAlt="Utilaj de construcții HCN Construct pe șantier în Sibiu"
            />

            <section className={styles.faqSection} style={{backgroundColor: servicii.backgroundColor}}>
                <div className={styles.faqInner}>
                    <h2 className={styles.faqHeading}>Întrebări frecvente</h2>
                    {FAQS.map((item) => (
                        <div key={item.q} className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>{item.q}</h3>
                            <p className={styles.faqAnswer}>{item.a}</p>
                        </div>
                    ))}
                    <p className={styles.cta}>
                        <Link href="/contact">Cere o ofertă personalizată →</Link>
                    </p>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {"@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://www.hcn-construct.ro/"},
                                {"@type": "ListItem", "position": 2, "name": "Servicii", "item": "https://www.hcn-construct.ro/servicii"},
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
                        ...servicii.listItems.map((group) => ({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": group.title,
                            "provider": {"@type": "HomeAndConstructionBusiness", "name": "HCN Construct"},
                            "areaServed": "Sibiu",
                        })),
                    ]),
                }}
            />
        </>
    );
}
