"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { workData } from "@/lib/consts/sections/work";
import { useState } from "react";
import { WorkEntryDesktop } from "./WorkEntryDesktop";
import { WorkEntryMobile } from "./WorkEntryMobile";

export function Work() {
    const [expandedWorkId, setExpandedWorkId] = useState<string | undefined>();

    const handleToggle = (id: string) => {
        setExpandedWorkId((currentId) =>
            currentId === id ? undefined : id
        );
    };

    return (
        <section
            id="work"
            className="min-h-screen flex flex-col items-center gap-10 sm:pt-30 md:35 lg:px-10 xl:px-20"
        >
            <SectionHeader title="Work" />

            <div className="w-full max-w-7xl">
                {workData.map((entry) => (
                    <div key={entry.id}>
                        <div className="hidden md:block">
                            <WorkEntryDesktop
                                entry={entry}
                                isExpanded={expandedWorkId === entry.id}
                                onToggle={() => handleToggle(entry.id)}
                            />
                        </div>
                        <div className="md:hidden flex justify-center">
                            <WorkEntryMobile
                                entry={entry}
                                isExpanded={expandedWorkId === entry.id}
                                onToggle={() => handleToggle(entry.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
