import { PlatformsBox } from "./PlatformsBox";

export function Socials() {
    return (
        <section
            id="socials"
            className="min-h-screen flex flex-col items-center gap-16 sm:pt-30 md:35 lg:px-10 xl:px-20"
        >
            <div className="w-full flex justify-start">
                <p className="text-3xl sm:text-6xl font-bold text-accent">
                    # Socials
                </p>
            </div>

            <div className="flex font-semibold sm:text-xl px-4 sm:px-6">
                <span className="mr-2">{">"}</span>
                <p>
                    connect with me across platforms and dive deeper into my
                    work
                </p>
            </div>

            <PlatformsBox />
        </section>
    );
}
