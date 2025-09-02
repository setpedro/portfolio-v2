"use client";

import { usePathname, useRouter } from "next/navigation";
import { SectionId, sectionsData } from "@/lib/consts/sections";
import { Button } from "./ui/Button";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollRedirect } from "@/hooks/useScrollRedirect";

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const onHomePage = pathname === "/";

    const sections = sectionsData.filter((s) => s.id !== "hero");

    const activeSection = useActiveSection(onHomePage);
    useScrollRedirect(onHomePage);

    return (
        <div
            className={cn(
                "flex justify-between py-5 px-4 backdrop-blur-sm bg-background/60",
                "shadow-[0_4px_6px_-2px_theme(colors.background)]"
            )}
        >
            <Button
                size="md"
                color={getButtonColor("hero", activeSection)}
                onClick={() =>
                    onHomePage ? scrollToSection("hero") : router.push("/")
                }
            >
                [
                <span className="inline sm:hidden w-[0.25em]" />
                <span className="hidden sm:inline w-[0.6em]" />
                /
                <span className="inline sm:hidden w-[0.25em]" />
                <span className="hidden sm:inline w-[0.6em]" />]
            </Button>

            <div className="flex items-center gap-1 flex-nowrap">
                {sections.map(({ id }) =>
                    onHomePage ? (
                        <Button
                            key={id}
                            size="md"
                            color={getButtonColor(id, activeSection)}
                            onClick={() => scrollToSection(id)}
                        >
                            [
                            <span className="inline sm:hidden w-[0.25em]" />
                            <span className="hidden sm:inline w-[0.6em]" />
                            <span className="capitalize">{id}</span>
                            <span className="inline sm:hidden w-[0.25em]" />
                            <span className="hidden sm:inline w-[0.6em]" />]
                        </Button>
                    ) : (
                        <Button
                            key={id}
                            size="md"
                            color="foreground"
                            onClick={() => router.push(`/?scroll=${id}`)}
                        >
                            [
                            <span className="inline sm:hidden w-[0.25em]" />
                            <span className="hidden sm:inline w-[0.6em]" />
                            <span className="capitalize">{id}</span>
                            <span className="inline sm:hidden w-[0.25em]" />
                            <span className="hidden sm:inline w-[0.6em]" />]
                        </Button>
                    )
                )}
            </div>
        </div>
    );
}

function getButtonColor(sectionId: SectionId, activeSection: SectionId) {
    return activeSection === sectionId ? "accent" : "foreground";
}
