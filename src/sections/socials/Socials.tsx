import Link from "next/link";
import { Icon } from "@iconify/react";
import { iconMap, socialsData } from "@/lib/consts/sections/socials";

export function Socials() {
    const nonEmailSocials = socialsData.filter((s) => s.platform !== "email");
    const emailSocial = socialsData.find((s) => s.platform === "email");

    return (
        <section
            id="socials"
            className="min-h-screen flex flex-col items-center gap-16 pt-25 sm:pt-30 md:35"
        >
            <div className="w-full flex justify-start">
                <p className="text-3xl sm:text-6xl font-bold text-accent">
                    # Socials
                </p>
            </div>

            <div className="flex font-semibold sm:text-xl px-4 sm:px-6">
                <span className="mr-1">{">"}</span>
                <p>
                    connect with me across platforms and dive deeper into my
                    work
                </p>
            </div>

            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 px-8 sm:px-10">
                    {nonEmailSocials.map((social) => (
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
                            <span className="text-sm sm:text-base uppercase">
                                {social.platform}
                            </span>
                        </Link>
                    ))}
                </div>

                {emailSocial && (
                    <Link
                        href={emailSocial.url}
                        className="flex flex-col items-center gap-1 font-bold text-foreground/60 hover:text-foreground"
                    >
                        <Icon
                            icon={iconMap[emailSocial.platform]}
                            width="48"
                            height="48"
                        />
                        <span className="text-lg sm:text-xl">
                            {emailSocial.platform}
                        </span>
                    </Link>
                )}
            </div>
        </section>
    );
}
