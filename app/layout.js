import { Montserrat, Work_Sans } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
    title: "Micropigmentare Pro - Belle Studio by Cristina Lăcău",
    description: "Servicii profesionale de micropigmentare și cursuri acreditate.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ro" className={`${workSans.className}`}>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </head>
        <body className={workSans.className}>
        {children}
        </body>
        </html>
    );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
