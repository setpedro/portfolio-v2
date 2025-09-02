import Link from "next/link";
import { Icon } from "@iconify/react";
import { iconMap, socialsData } from "@/lib/consts/sections/socials";

export function Footer() {
    const emailSocial = socialsData.find((s) => s.platform === "email");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-accent bg-background/80 backdrop-blur-sm">
            <div className="text-center w-full -mt-24 py-8">
                <span className="inline-block rotate-90 font-semibold text-accent text-xl">
                    {">"}
                </span>
            </div>

            <div className="w-full mx-auto px-14 xl:px-40">
                <div className="flex flex-col items-center gap-6 py-12">
                    <p className="text-center text-xl sm:text-2xl font-bold text-accent">
                        Interested in working together?
                    </p>

                    {emailSocial && (
                        <Link
                            href={emailSocial.url}
                            className="group flex items-center justify-center gap-3 px-6 py-3 font-bold border border-accent hover:bg-accent/10 text-foreground/60 hover:text-foreground transition-colors"
                        >
                            <Icon
                                icon={iconMap[emailSocial.platform]}
                                width="32"
                                height="32"
                                className="text-accent"
                            />
                            <span className="text-sm sm:text-base">
                                send me an email
                            </span>
                        </Link>
                    )}
                </div>

                <div className="border-t border-accent/20"></div>

                <div className="flex flex-col md:flex-row md:items-end justify-between items-center gap-4 px-1 py-10">
                    <div className="text-center md:text-left">
                        <p className="font-bold mb-1">
                            © {currentYear} Pedro Serrano. All rights reserved
                        </p>
                        <p className="text-foreground/60 text-sm md:pl-5">
                            Full Stack Developer & Creative Coder
                        </p>
                    </div>

                    <div className="text-center md:text-right md:mb-0.5">
                        <p className="text-foreground/40 text-xs">
                            Built with{" "}
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-accent"
                            >
                                Next.js
                            </a>{" "}
                            &{" "}
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-accent"
                            >
                                Tailwind CSS
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
