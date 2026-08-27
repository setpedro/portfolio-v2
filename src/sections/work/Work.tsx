import { SectionHeader } from "@/components/SectionHeader";
import { WorkEntryDesktop } from "./WorkEntryDesktop";
import { WorkEntryMobile } from "./WorkEntryMobile";

export function Work() {
    return (
        <section
            id="work"
            className="min-h-screen flex flex-col items-center gap-10 sm:pt-30 md:35 lg:px-10 xl:px-20"
        >
            <SectionHeader title="Work" />

            <div className="hidden md:block w-full max-w-7xl">
                <WorkEntryDesktop />
            </div>
            <div className="md:hidden w-full max-w-7xl flex justify-center">
                <WorkEntryMobile />
            </div>
        </section>
    );
}
