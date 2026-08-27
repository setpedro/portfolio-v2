import { WorkEntry } from "@/lib/consts/sections/work";
import Image from "next/image";
import Link from "next/link";

type WorkEntryMobile = {
    entry: WorkEntry;
    isExpanded: boolean;
    onToggle: () => void;
};

export function WorkEntryMobile({
    entry,
    isExpanded,
    onToggle,
}: WorkEntryMobile) {
    const titleContent = (
        <>
            <span>[</span>
            {entry.link && <span>&#8599;</span>}
            <span>{entry.name}</span>
            <span>]</span>
        </>
    );
    const hasDetails = entry.details.length > 0;

    return (
        <div className="relative flex flex-col gap-2 p-2 w-full max-w-[512px] bg-background">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent"></div>
            </div>
            {entry.logo && (
                <div className="mx-auto relative w-full max-w-[512px] aspect-square">
                    <Image
                        src={entry.logo}
                        alt={entry.logoAlt ?? entry.name}
                        fill
                        sizes="(max-width: 768px) 100vw"
                        className="object-contain"
                    />
                </div>
            )}

            <div className="flex flex-col w-full">
                <div className="flex justify-end">
                    {hasDetails ? (
                        <button
                            type="button"
                            onClick={onToggle}
                            className="group cursor-pointer text-foreground/60 hover:text-foreground transition-colors"
                        >
                            <div className="text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                                [ {isExpanded ? "collapse" : "expand"} ]
                            </div>
                        </button>
                    ) : (
                        <div
                            aria-hidden="true"
                            className="text-sm text-foreground/60 invisible"
                        >
                            [ expand ]
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-wrap gap-x-2 gap-y-1 font-semibold text-xl">
                            {entry.link ? (
                                <Link
                                    href={entry.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-accent hover:text-accent/60 transition-colors"
                                >
                                    {titleContent}
                                </Link>
                            ) : (
                                <span className="flex items-center gap-2 text-accent">
                                    {titleContent}
                                </span>
                            )}
                            <p>{entry.role}</p>
                        </div>

                        <div className="flex font-semibold">
                            <span className="mr-2">{">"}</span>
                            <p>{entry.description}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex flex-wrap items-center gap-3 font-semibold text-accent">
                            {entry.results.map((result, index) => (
                                <span
                                    key={result}
                                    className="flex items-center gap-3"
                                >
                                    {index > 0 && (
                                        <span className="w-1 h-1 bg-accent"></span>
                                    )}
                                    <span>{result}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <p className="text-sm text-foreground/60">
                        {entry.timeline}
                    </p>
                </div>
            </div>
        </div>
    );
}
