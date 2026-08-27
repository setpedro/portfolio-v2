import { WorkEntry } from "@/lib/consts/sections/work";
import Image from "next/image";
import Link from "next/link";

type WorkEntryDesktop = {
    entry: WorkEntry;
    cornerSide: "left" | "right";
    isExpanded: boolean;
    onToggle: () => void;
};

export function WorkEntryDesktop({
    entry,
    cornerSide,
    isExpanded,
    onToggle,
}: WorkEntryDesktop) {
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
        <div className="relative flex flex-col p-2 w-full max-w-7xl bg-background">
            <div className="absolute inset-0 pointer-events-none">
                {cornerSide === "left" ? (
                    <>
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent"></div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent"></div>
                    </>
                )}
            </div>

            <div className="flex items-stretch gap-2">
                {entry.logo && (
                    <Image
                        src={entry.logo}
                        alt={entry.logoAlt ?? entry.name}
                        width={204}
                        height={204}
                        sizes="204px"
                        className="w-[204px] h-[204px] object-contain shrink-0"
                    />
                )}
                <div className="flex flex-col justify-between self-stretch w-full">
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
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex">
                                <div className="flex gap-2 font-semibold text-xl">
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
                            </div>

                            <div className="flex font-semibold max-w-2xl">
                                <span className="mr-2">{">"}</span>
                                <p>{entry.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center gap-3 font-semibold text-accent">
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
                        <p
                            className={`text-sm text-foreground/60 ${
                                isExpanded ? "invisible" : ""
                            }`}
                        >
                            {entry.timeline}
                        </p>
                    </div>
                </div>
            </div>
            {isExpanded && (
                <div className="flex flex-col justify-between gap-8 pt-4 font-semibold text-foreground/60 opacity-0 animate-[fadeIn_0.25s_ease-out_forwards]">
                    <div className="flex flex-col gap-3">
                        {entry.details.map((detail) => (
                            <div key={detail} className="flex">
                                <span className="mr-2">{">"}</span>
                                <p>{detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pl-5">
                        {entry.stack.map((tech, index) => (
                            <span key={tech} className="flex items-center gap-3">
                                {index > 0 && (
                                    <span className="w-1 h-1 bg-foreground/60"></span>
                                )}
                                <span>{tech}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {isExpanded && (
                <div className="flex justify-end">
                    <p className="text-sm text-foreground/60">
                        {entry.timeline}
                    </p>
                </div>
            )}
        </div>
    );
}
