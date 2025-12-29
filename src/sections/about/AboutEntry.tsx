"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type AboutEntry = {
    title: string;
    accent: string;
    content: string;
    index: number;
    isLast: boolean;
};

export function AboutEntry({
    title,
    accent,
    content,
    index,
    isLast,
}: AboutEntry) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex">
            <div className="flex flex-col items-center mr-2">
                <div
                    className={cn(
                        "flex items-center justify-center font-bold",
                        getAccentColor(accent)
                    )}
                >
                    [{index + 1}]
                </div>
                {(!isLast || (isLast && isExpanded)) && (
                    <div className="w-0.5 h-full mb-4 bg-gray-600 my-1"></div>
                )}
            </div>

            <div className="flex-1 pb-10">
                {!isExpanded ? (
                    <div
                        onClick={() => setIsExpanded(true)}
                        className="group flex items-baseline gap-2 mb-3 cursor-pointer text-foreground/60 hover:text-foreground transition-colors"
                    >
                        <span className="group-hover:text-foreground transition-colors">
                            {title}
                        </span>

                        <span className="flex-1 border-b-[3px] border-dotted border-foreground/60 group-hover:border-foreground translate-y-[2px] transition-colors [border-image:repeating-linear-gradient(to_right,theme(colors.foreground/60%)_0,theme(colors.foreground/60%)_3px,transparent_3px,transparent_12px)_1] group-hover:[border-image:repeating-linear-gradient(to_right,theme(colors.foreground)_0,theme(colors.foreground)_3px,transparent_3px,transparent_12px)_1]"></span>
                        <div className="text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                            [ expand ]
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <div
                            onClick={() => setIsExpanded(false)}
                            className="group flex items-baseline gap-2 mb-3 cursor-pointer text-foreground hover:text-foreground transition-colors"
                        >
                            <span className="font-bold">{title}</span>
                            <span className="flex-1 border-b-[3px] border-dotted border-foreground/60 group-hover:border-foreground translate-y-[2px] transition-colors [border-image:repeating-linear-gradient(to_right,theme(colors.foreground/60%)_0,theme(colors.foreground/60%)_3px,transparent_3px,transparent_12px)_1] group-hover:[border-image:repeating-linear-gradient(to_right,theme(colors.foreground)_0,theme(colors.foreground)_3px,transparent_3px,transparent_12px)_1]"></span>
                            <div className="text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                                [ collapse ]
                            </div>
                        </div>
                        <div className="text-foreground/80 leading-relaxed whitespace-pre-line opacity-0 animate-[fadeIn_0.25s_ease-out_forwards]">
                            {content}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function getAccentColor(accent: string) {
    const colors = {
        cyan: "text-cyan-400",
        green: "text-green-400",
        purple: "text-purple-400",
        orange: "text-orange-400",
    };
    return colors[accent as keyof typeof colors] || "text-cyan-400";
}
