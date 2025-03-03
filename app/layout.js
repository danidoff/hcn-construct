import {Montserrat, Work_Sans} from 'next/font/google';
import '@/styles/globals.css';
import LenisProvider from "@/components/LenisProvider";

const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '700']});
const workSans = Work_Sans({subsets: ['latin'], weight: ['400', '500', '700']});

export const metadata = {
    title: "HCN Construct - Lucrări de excavaţii şi terasamente Sibiu",
    description: "HCN Consrtruct execută lucrări de excavaţii şi terasamente cu personal specializat, în cele mai sigure condiţii şi cu utilaje performante de ultimă generaţie.",
};

export default function RootLayout({children}) {
    return (
        <html lang="ro" className={`${workSans.className}`}>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </head>
        <body className={workSans.className}>
        <LenisProvider>
            {children}
        </LenisProvider>

        </body>
        </html>
    );
}