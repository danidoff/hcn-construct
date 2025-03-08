import {Montserrat, Work_Sans} from 'next/font/google';
import '@/styles/globals.css';
import LenisProvider from "@/components/LenisProvider";
import { Viewport } from 'next'

const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '700']});
const workSans = Work_Sans({subsets: ['latin'], weight: ['400', '500', '700']});

export const metadata = {
    title: "HCN Construct - Lucrări de excavaţii şi terasamente Sibiu",
    description: "HCN Construct execută lucrări de excavaţii şi terasamente cu personal specializat, în cele mai sigure condiţii şi cu utilaje performante de ultimă generaţie.",
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({children}) {
    return (
        <html lang="ro" className={`${workSans.className}`}>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="demolări, excavații, construcții, închiriere utilaje, terasamente, Sibiu, România" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="HCN Construct - Servicii de demolări și excavații" />
            <meta property="og:description" content="Specialiști în demolări mecanizate și lucrări de excavație pentru orice tip de proiect." />
            <meta property="og:image" content="/images/home.jpg" />
            <meta property="og:url" content="https://hcn-construct.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="HCN Construct" />
            <meta name="twitter:description" content="Servicii profesionale de demolări și excavații." />
            <meta name="twitter:image" content="/images/home.jpg" />
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
        </head>
        <body className={workSans.className}>
        <LenisProvider>
            {children}
        </LenisProvider>

        </body>
        </html>
    );
}