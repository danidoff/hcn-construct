import Header from '@/components/Header.jsx';
import sectionsData from '@/data/sections.json';
import HeroSection from "@/components/HeroSection";
import SectionContainer from "@/components/SectionContainer";

const serviciiSection = sectionsData.find((s) => s.id === "servicii");
const fleetCount = serviciiSection.listItems
    .find((group) => group.title.toLowerCase().includes("utilaje"))
    ?.items.length ?? 0;

const contactSection = sectionsData.find((s) => s.id === "contact");
const CONTACT_MAP_EMBED_SRC =
    "https://www.google.com/maps?q=Strada+Principala+373,+Vestem,+Sibiu,+Romania&output=embed";

export default () => (
    <>
        <Header/>
        {sectionsData
            .filter((section) => section.id !== "galerie")
            .map((section) => {
                if (section.id === "home") {
                    return (
                        <HeroSection key={section.id} {...section} fleetCount={fleetCount}/>
                    );
                }

                if (section.id === "contact") {
                    return (
                        <SectionContainer key={section.id} {...section} mapEmbedSrc={CONTACT_MAP_EMBED_SRC}/>
                    );
                }

                return (
                    <SectionContainer key={section.id} {...section}/>
                );
            })}
    </>
)
