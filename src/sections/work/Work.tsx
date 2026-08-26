import { SectionHeader } from "@/components/SectionHeader";
import { WorkEntryDesktop } from "./WorkEntryDesktop";

export function Work() {
    return (
        <section
            id="work"
            className="min-h-screen flex flex-col items-center gap-10 sm:pt-30 md:35 lg:px-10 xl:px-20"
        >
            <SectionHeader title="Work" />

            <WorkEntryDesktop />
        </section>
    );
}
