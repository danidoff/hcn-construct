import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import sectionsData from "@/data/sections.json";
import styles from "@/styles/ContentPage.module.css";

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

            <PageHero
                title="Galeria Utilajelor și Lucrărilor Noastre"
                intro="Excavatoare și miniexcavatoare Hitachi, Kubota și Terex, autobasculante MAN și Mercedes, încărcătoare frontale și lucrări executate în Sibiu și împrejurimi."
            />

            <div className={styles.body}>
                <div className={styles.inner}>
                    <p className={styles.introText}>
                        Flota este împărțită pe categorii: mini excavatoare Hitachi, Kubota și Zaxis pentru
                        lucrări în spații restrânse, excavatoare și încărcătoare frontale de capacitate mai mare
                        pentru terasamente ample, autobasculante MAN și Mercedes pentru transport de materiale, și
                        mini încărcătoare Bobcat pentru curățare și nivelare teren. Detalii despre fiecare tip de
                        utilaj și greutățile disponibile găsești pe pagina de{" "}
                        <Link href="/servicii" className={styles.inlineLink}>servicii și închiriere utilaje</Link>.
                    </p>

                    <div className={styles.galleryGrid}>
                        {galerie.images.map((img, index) => (
                            <div key={`${img.src}-${index}`} className={styles.galleryItem}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw, 260px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
