import { SectionId, sectionsData } from "@/lib/consts/sections";
import { Button } from "./ui/Button";

export function Navbar() {
    const sections = sectionsData.filter((section) => section.id !== "hero");

    // TODO: replace with actual state (scroll-spy)
    const activeSection: SectionId = "hero";

    return (
        <div className="flex justify-between py-5">
            <Button size="md" color={getButtonColor("hero", activeSection)}>
                [
                <span className="inline sm:hidden w-[0.25em]" />
                <span className="hidden sm:inline w-[0.6em]" />
                /
                <span className="inline sm:hidden w-[0.25em]" />
                <span className="hidden sm:inline w-[0.6em]" />]
            </Button>

            <div className="flex items-center gap-1 flex-nowrap">
                {sections.map(({ id }) => (
                    <Button
                        key={id}
                        size="md"
                        color={getButtonColor(id, activeSection)}
                    >
                        [
                        <span className="inline sm:hidden w-[0.25em]" />
                        <span className="hidden sm:inline w-[0.6em]" />
                        <span className="capitalize">{id}</span>
                        <span className="inline sm:hidden w-[0.25em]" />
                        <span className="hidden sm:inline w-[0.6em]" />]
                    </Button>
                ))}
            </div>
        </div>
    );
}

function getButtonColor(
    sectionId: SectionId,
    activeSection: SectionId
): "accent" | "foreground" {
    return activeSection === sectionId ? "accent" : "foreground";
}
