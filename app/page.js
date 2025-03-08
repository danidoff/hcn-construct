import Header from '@/components/Header.jsx';
import sectionsData from '@/data/sections.json';
import HeroSection from "@/components/HeroSection";
import SectionContainer from "@/components/SectionContainer";

export default () => (
    <>
        <Header/>
        {sectionsData.map((section) => {
            if (section.id === "home") {
                return (
                    <HeroSection key={section.id} {...section}                    />
                );
            }
            
            return (
                <SectionContainer key={section.id} {...section}         />
            );
        })}
    </>
)