"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AppWrapper({ children }) {
    const router = useRouter();

    useEffect(() => {
        const handleHashChange = () => {
            const sectionId = window.location.hash.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80, // Offset for fixed header
                    behavior: "smooth",
                });
            }
        };

        handleHashChange(); // Run on first load
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, [router]);

    return <>{children}</>;
}
