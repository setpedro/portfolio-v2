import { Button } from "./ui/Button";

type Section = "Projects" | "About" | "Socials";

const getButtonColor = (
    section: Section,
    activeSection: Section
): "accent" | "foreground" => {
    return activeSection === section ? "accent" : "foreground";
};

export function Navbar() {
    const sections: Section[] = ["Projects", "About", "Socials"];

    // TODO: replace with actual state (scroll-spy)
    const activeSection: Section = "Projects";

    return (
        <div className="flex justify-between py-5">
            <Button size="md" color="foreground">
                [
                <span className="inline sm:hidden w-[0.25em]" />
                <span className="hidden sm:inline w-[0.6em]" />
                /
                <span className="inline sm:hidden w-[0.25em]" />
                <span className="hidden sm:inline w-[0.6em]" />]
            </Button>

            <div className="flex items-center gap-1 flex-nowrap">
                {sections.map((section) => (
                    <Button
                        key={section}
                        size="md"
                        color={getButtonColor(section, activeSection)}
                    >
                        [
                        <span className="inline sm:hidden w-[0.25em]" />
                        <span className="hidden sm:inline w-[0.6em]" />
                        {section}
                        <span className="inline sm:hidden w-[0.25em]" />
                        <span className="hidden sm:inline w-[0.6em]" />]
                    </Button>
                ))}
            </div>
        </div>
    );
}
