import { Hero } from "@/sections/hero";

export type SectionId = "hero" | "projects" | "about" | "socials";

export const sectionsData: {
    id: SectionId;
    label: string;
    Component?: React.FC;
}[] = [
    { id: "hero", label: "/", Component: Hero },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "socials", label: "Socials" },
];

export const sectionHeaders = {
    projects: {
        title: "Projects",
    },
    about: {
        title: "About",
        subtitle: "who I am and why I code",
    },
    socials: {
        title: "Socials",
    },
    labs: {
        title: "Labs",
        subtitle: "smaller builds that taught me a lot",
    },
};
