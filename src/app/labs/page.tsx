import { LabsProject } from "@/components/LabsProject";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { labsData } from "@/lib/consts/sections/labs";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-2 sm:px-2 md:px-10 lg:px-16 xl:px-34">
                <Navbar />
            </div>

            <div className="min-h-screen flex flex-col items-center gap-6 pt-25 sm:pt-30 px-4 sm:px-8 md:px-16 lg:px-22 xl:px-40 pb-9">
                <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-end gap-2 lg:gap-4">
                    <p className="text-3xl sm:text-6xl font-bold text-accent">
                        # Labs
                    </p>
                    <p className="text-sm sm:text-2xl font-bold text-foreground/60">
                        // smaller builds that taught me a lot
                    </p>
                </div>
                <div className="flex flex-col max-w-4xl">
                    {labsData.map((lab, index) => (
                        <React.Fragment key={lab.id}>
                            <LabsProject id={lab.id} info={lab.info} />
                            {index < labsData.length - 1 && (
                                <hr className="border-t border-accent" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="w-full flex justify-start">
                    <Link href="/#projects">
                        <Button
                            size="md"
                            color="foreground"
                            title="More projects"
                        >
                            [ Go back
                            <span className="ml-2 mr-3 mb-2 text-3xl leading-none">
                                &#8601;
                            </span>
                            ]
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
