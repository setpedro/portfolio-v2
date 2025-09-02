import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/consts/sections/projects";
import { Project } from "./Project";
import Link from "next/link";

export function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center gap-10 sm:pt-30 md:35"
        >
            <div className="w-full flex justify-start">
                <p className="text-3xl sm:text-6xl font-bold text-accent">
                    # Projects
                </p>
            </div>

            <div className="flex flex-col gap-8 mx-2 mt-10 max-w-3xl">
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

            <div className="w-full flex justify-start">
                <Link href="/labs">
                    <Button size="md" color="foreground" title="More projects">
                        [ Labs
                        <span className="ml-2 mr-3 mb-2 text-3xl leading-none">
                            &#8599;
                        </span>
                        ]
                    </Button>
                </Link>
            </div>
        </section>
    );
}
