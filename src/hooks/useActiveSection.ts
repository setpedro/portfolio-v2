import { useEffect, useState } from "react";
import { SectionId, sectionsData } from "@/lib/consts/sections";

export function useActiveSection(onHomePage: boolean) {
    const [activeSection, setActiveSection] = useState<SectionId | undefined>();

    useEffect(() => {
        if (!onHomePage) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id as SectionId);
                    }
                });
            },
            { rootMargin: "0px 0px -50% 0px", threshold: 0.3 }
        );

        sectionsData.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [onHomePage]);

    return activeSection;
}
