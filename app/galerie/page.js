import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import sectionsData from "@/data/sections.json";

const galerie = sectionsData.find((s) => s.id === "galerie");

export const metadata = {
    title: "Galerie Foto Utilaje și Lucrări | HCN Construct Sibiu",
    description: "Vezi utilajele și lucrările executate de HCN Construct: excavatoare, buldoexcavatoare, autobasculante și proiecte de excavații și demolări în Sibiu.",
    alternates: {
        canonical: "/galerie",
    },
    openGraph: {
        title: "Galerie Foto Utilaje și Lucrări | HCN Construct Sibiu",
        description: "Excavatoare, autobasculante și utilaje de construcții HCN Construct în acțiune, în Sibiu.",
        url: "https://www.hcn-construct.ro/galerie",
        siteName: "HCN Construct",
        images: [
            {
                url: "https://www.hcn-construct.ro/images/gallery.jpg",
                width: 1200,
                height: 630,
                alt: "Galerie HCN Construct",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Galerie HCN Construct",
        description: "Utilajele și lucrările HCN Construct în imagini.",
        images: ["https://www.hcn-construct.ro/images/gallery.jpg"],
    },
};

export default function GaleriePage() {
    return (
        <>
            <Header/>

            <SectionContainer
                id="galerie"
                title="Galeria Utilajelor și Lucrărilor Noastre"
                titleAs="h1"
                content="Fotografii din activitatea zilnică HCN Construct: excavatoare și miniexcavatoare Hitachi, Kubota și Terex, autobasculante MAN și Mercedes, încărcătoare frontale și lucrări de excavații, demolări și terasamente executate în Sibiu și împrejurimi."
                images={galerie.images}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {"@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://www.hcn-construct.ro/"},
                            {"@type": "ListItem", "position": 2, "name": "Galerie", "item": "https://www.hcn-construct.ro/galerie"},
                        ],
                    }),
                }}
            />
        </>
    );
}
