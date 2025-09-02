"use client";

import { usePathname } from "next/navigation";
import { SectionId, sectionsData } from "@/lib/consts/sections";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollRedirect } from "@/hooks/useScrollRedirect";
import { ScrollButton } from "./ui/ScrollButton";

export function Navbar() {
    const pathname = usePathname();
    const onHomePage = pathname === "/";

    const sections = sectionsData.filter((s) => s.id !== "hero");

    const activeSection = useActiveSection(onHomePage);
    useScrollRedirect(onHomePage);

    return (
        <div className="fixed top-0 left-0 right-0 z-2 sm:px-2 md:px-8 lg:px-14 xl:px-32">
            <div
                className={cn(
                    "flex justify-between py-5 px-4 backdrop-blur-sm bg-background/60",
                    "shadow-[0_4px_6px_-2px_theme(colors.background)]"
                )}
            >
                <ScrollButton
                    sectionId="hero"
                    size="md"
                    color={getButtonColor("hero", activeSection)}
                >
                    [
                    <span className="inline sm:hidden w-[0.25em]" />
                    <span className="hidden sm:inline w-[0.6em]" />
                    /
                    <span className="inline sm:hidden w-[0.25em]" />
                    <span className="hidden sm:inline w-[0.6em]" />]
                </ScrollButton>

                <div className="flex items-center gap-1 flex-nowrap">
                    {sections.map(({ id }) => (
                        <ScrollButton
                            key={id}
                            sectionId={id}
                            size="md"
                            color={getButtonColor(id, activeSection)}
                        >
                            [
                            <span className="inline sm:hidden w-[0.25em]" />
                            <span className="hidden sm:inline w-[0.6em]" />
                            <span className="capitalize">{id}</span>
                            <span className="inline sm:hidden w-[0.25em]" />
                            <span className="hidden sm:inline w-[0.6em]" />]
                        </ScrollButton>
                    ))}
                </div>
            </div>
        </div>
    );
}

function getButtonColor(sectionId?: SectionId, activeSection?: SectionId) {
    return activeSection === sectionId ? "accent" : "foreground";
}
