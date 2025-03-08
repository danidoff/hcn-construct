import {Montserrat, Work_Sans} from 'next/font/google';
import '@/styles/globals.css';
import LenisProvider from "@/components/LenisProvider";

const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '700']});
const workSans = Work_Sans({subsets: ['latin'], weight: ['400', '500', '700']});

export const metadata = {
    title: "HCN Construct - Lucrări de excavaţii şi terasamente Sibiu",
    description: "HCN Construct execută lucrări de excavaţii şi terasamente cu personal specializat, în cele mai sigure condiţii şi cu utilaje performante de ultimă generaţie.",
    keywords: "demolări, excavații, construcții, închiriere utilaje, terasamente, Sibiu, România",
    robots: "index, follow",
    openGraph: {
        title: "HCN Construct - Servicii de demolări și excavații",
        description: "Specialiști în demolări mecanizate și lucrări de excavație pentru orice tip de proiect.",
        url: "https://hcn-construct.vercel.app/",
        siteName: "HCN Construct",
        images: [
            {
                url: "https://hcn-construct.vercel.app/images/home.jpg",
                width: 1200,
                height: 630,
                alt: "HCN Construct Logo",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "HCN Construct",
        description: "Servicii profesionale de demolări și excavații.",
        images: ["https://hcn-construct.vercel.app/images/home.jpg"],
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({children}) {
    return (
        <html lang="ro" className={`${workSans.className}`}>
        <body className={workSans.className}>
        <LenisProvider>
            {children}
        </LenisProvider>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "HCN Construct",
                    "description": "Oferim servicii de demolări și excavații industriale și rezidențiale în România.",
                    "url": "https://hcn-construct.vercel.app/",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Strada Principala, nr.373",
                        "addressLocality": "Vestem",
                        "addressRegion": "Sibiu",
                        "addressCountry": "RO"
                    },
                    "telephone": "+40 740 912 779",
                    "image": "https://hcn-construct.vercel.app/images/home.jpg"
                }),
            }}
        />
        </body>
        </html>
    );
}
