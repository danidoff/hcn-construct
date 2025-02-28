import Header from '@/components/Header';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import sectionsData from '@/data/sections.json';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            {/* Loop through JSON data to render sections dynamically */}
            {sectionsData.map((section) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
}