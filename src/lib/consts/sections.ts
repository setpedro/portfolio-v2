import { Hero } from "@/sections/hero";

export type SectionId = "hero" | "projects" | "about" | "socials";

export const sections: { id: SectionId; label: string; Component: React.FC }[] =
    [
        { id: "hero", label: "/", Component: Hero },
        // { id: "projects", label: "Projects", Component: Projects },
        // { id: "about", label: "About", Component: About },
        // { id: "socials", label: "Socials", Component: Socials },
    ];
