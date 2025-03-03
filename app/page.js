import Header from '@/components/Header.jsx';
import Section from '@/components/Section.jsx';
import sectionsData from '@/data/sections.json';
import styles from '@/styles/Home.module.css';
import Gallery from "@/components/Gallery";

export default function Home() {
    // const images = [
    //     { src: '/images/gallery1.jpg', alt: 'Gallery image 1' },
    //     { src: '/images/gallery2.jpg', alt: 'Gallery image 2' },
    //     { src: '/images/gallery3.jpg', alt: 'Gallery image 3' },
    //     { src: '/images/gallery4.jpg', alt: 'Gallery image 4' },
    //     { src: '/images/gallery5.jpg', alt: 'Gallery image 5' },
    //     { src: '/images/gallery6.jpg', alt: 'Gallery image 6' }
    // ]
    
    return (
        <div className={styles.container}>
            <Header />

            {/* Loop through JSON data to render sections dynamically */}
            {sectionsData.map((section) => (
                <Section key={section.id} {...section} />
            ))}
            {/*<Gallery images={images} />*/}
        </div>
    );
}