import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/consts/sections/projects";
import { Project } from "./Project";
import Link from "next/link";

export function Projects() {
    return (
        <section className="min-h-screen flex flex-col gap-10 pt-25 sm:pt-30 md:35">
            <p className="text-3xl sm:text-6xl font-bold text-accent">
                # Projects
            </p>

            <div className="flex flex-col gap-8 mx-auto mt-10 max-w-3xl">
                {projectsData.map((p) => (
                    <Project
                        key={p.id}
                        title={p.id}
                        info={p.info}
                        webLink={p.webLink}
                        ghLink={p.ghLink}
                        logoExt={p.logoExt}
                    />
                ))}
            </div>

            <div className="flex">
                <Link href="/experiments">
                    <Button size="md" color="foreground" title="More projects">
                        [ Labs
                        <span className="ml-2 mr-3 mb-2 text-3xl leading-none">
                            ↗
                        </span>
                        ]
                    </Button>
                </Link>
            </div>
        </section>
    );
}
