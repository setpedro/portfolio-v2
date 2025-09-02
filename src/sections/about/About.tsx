import { aboutData } from "@/lib/consts/sections/about";
import { AboutEntry } from "./AboutEntry";

export function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center gap-20 pt-25 sm:pt-30 md:35"
        >
            <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-end gap-2 lg:gap-4">
                <p className="text-3xl sm:text-6xl font-bold text-accent">
                    # About
                </p>
                <p className="text-xl sm:text-2xl font-bold text-foreground/60">
                    // who am I and why do I code
                </p>
            </div>

            <div className="w-full max-w-4xl">
                <div className="relative px-6 py-4">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* top-left */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent"></div>
                        {/* top-right */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent"></div>
                        {/* bottom-left */}
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent"></div>
                        {/* bottom-right */}
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent"></div>
                    </div>
                    {aboutData.map((section, index) => (
                        <AboutEntry
                            key={section.id}
                            id={section.id}
                            title={section.title}
                            accent={section.accent}
                            content={section.content}
                            index={index}
                            isLast={index === aboutData.length - 1}
                        />
                    ))}

                    <div className="flex items-center gap-2 mt-6">
                        <span className="text-accent">pedro@portfolio</span>
                        <span>: ~/about $</span>
                        <span className="bg-white text-black animate-pulse">
                            _
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
