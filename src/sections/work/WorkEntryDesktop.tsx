import { WorkEntry } from "@/lib/consts/sections/work";
import Image from "next/image";
import Link from "next/link";

type WorkEntryDesktop = {
    entry: WorkEntry;
    isExpanded: boolean;
    onToggle: () => void;
};

export function WorkEntryDesktop({
    entry,
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

    return (
        <div className="flex items-stretch gap-2 border border-accent/20 p-2 w-full max-w-7xl bg-background">
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
                    <button
                        type="button"
                        onClick={onToggle}
                        className="group cursor-pointer text-foreground/60 hover:text-foreground transition-colors"
                    >
                        <div className="text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                            [ {isExpanded ? "collapse" : "expand"} ]
                        </div>
                    </button>
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
                    <p className="text-sm text-foreground/60">
                        {entry.timeline}
                    </p>
                </div>
            </div>
        </div>
    );
}
