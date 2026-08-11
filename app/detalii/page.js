import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import sectionsData from "@/data/sections.json";
import styles from "@/styles/ContentPage.module.css";

const detalii = sectionsData.find((s) => s.id === "detalii");

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

            <SectionContainer
                id="detalii"
                title="Despre HCN Construct"
                titleAs="h1"
                content="HCN Construct este o companie din Vestem, Sibiu, specializată în lucrări de excavații, demolări mecanizate și terasamente pentru clienți industriali și rezidențiali. Ne concentrăm pe două lucruri: oamenii și utilajele. Investim continuu în pregătirea echipei și în flota de excavatoare, autobasculante și utilaje de compactare, astfel încât fiecare lucrare — de la săpături de fundație până la rețele de apă-canal — să fie dusă la bun sfârșit în siguranță, la termen și la parametrii conveniți cu clientul."
                listItems={detalii.listItems}
                image={detalii.image}
                imageAlt="Miniexcavator Hitachi al HCN Construct pe teren"
            />

            <section className={styles.infoSection} style={{backgroundColor: detalii.backgroundColor}}>
                <div className={styles.infoInner}>
                    <h2 className={styles.faqHeading}>Zona în care lucrăm</h2>
                    <p>
                        Suntem localizați în Vestem, județul Sibiu, și executăm lucrări de excavații, demolări și
                        terasamente în Sibiu și în localitățile din apropiere. Pentru închirierea utilajelor de
                        construcții acoperim întreaga țară, cu sau fără operator.
                    </p>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {"@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://www.hcn-construct.ro/"},
                            {"@type": "ListItem", "position": 2, "name": "Despre Noi", "item": "https://www.hcn-construct.ro/detalii"},
                        ],
                    }),
                }}
            />
        </>
    );
}
