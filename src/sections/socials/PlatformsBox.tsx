import { iconMap, socialsData } from "@/lib/consts/sections/socials";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export function PlatformsBox() {
    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 px-8 sm:px-10">
                {socialsData.map((social) => (
                    <Link
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center font-bold p-4 border border-accent hover:bg-accent/10 text-foreground/60 hover:text-foreground transition-colors"
                    >
                        <div className="mb-2">
                            <Icon
                                icon={iconMap[social.platform]}
                                width="48"
                                height="48"
                            />
                        </div>
                        <span className="text-sm sm:text-base">
                            {social.platform}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
