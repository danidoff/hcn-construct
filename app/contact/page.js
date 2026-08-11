import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import sectionsData from "@/data/sections.json";
import styles from "@/styles/ContentPage.module.css";

const contact = sectionsData.find((s) => s.id === "contact");

const MAP_EMBED_SRC =
    "https://www.google.com/maps?q=Strada+Principala+373,+Vestem,+Sibiu,+Romania&output=embed";

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

            <SectionContainer
                id="contact"
                title="Contact"
                titleAs="h1"
                content="Ai un proiect de excavații, demolări, terasamente sau ai nevoie de utilaje de construcții? Sună-ne sau vino la sediul din Vestem — răspundem rapid și îți transmitem o estimare pentru lucrarea ta."
                listItems={contact.listItems}
                mapEmbedSrc={MAP_EMBED_SRC}
            />

            <section className={styles.infoSection} style={{backgroundColor: contact.backgroundColor}}>
                <div className={styles.infoInner}>
                    <h2 className={styles.faqHeading}>Zonă deservită</h2>
                    <p>
                        Executăm lucrări în Sibiu și în tot județul Sibiu. Pentru închirierea utilajelor de
                        construcții, cu sau fără operator, acoperim întreaga țară.
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
                                {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.hcn-construct.ro/contact"},
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HomeAndConstructionBusiness",
                            "name": "HCN Construct",
                            "url": "https://www.hcn-construct.ro/contact",
                            "telephone": "+40 740 912 779",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Strada Principala, nr.373",
                                "addressLocality": "Vestem",
                                "addressRegion": "Sibiu",
                                "addressCountry": "RO",
                            },
                        },
                    ]),
                }}
            />
        </>
    );
}
