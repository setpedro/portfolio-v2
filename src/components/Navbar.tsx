"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SectionId, sectionsData } from "@/lib/consts/sections";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const onHomePage = pathname === "/";

    const sections = sectionsData.filter((s) => s.id !== "hero");
    const [activeSection, setActiveSection] = useState<SectionId>("hero");

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        if (!onHomePage) {
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        setActiveSection(entry.target.id as SectionId);
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

    // Handle redirect from other pages
    useEffect(() => {
        if (!onHomePage) return;
        const scrollTarget = searchParams.get("scroll");
        if (scrollTarget) {
            const element = document.getElementById(scrollTarget);
            if (element) {
                setTimeout(
                    () => element.scrollIntoView({ behavior: "smooth" }),
                    50
                );
            }
            // remove query from URL without reload
            router.replace("/", { scroll: false });
        }
    }, [onHomePage, searchParams, router]);

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
