import Image from "next/image";
import Link from "next/link";

export function WorkEntryDesktop() {
    return (
        <div className="flex items-stretch gap-2 border border-accent/20 p-2 w-full max-w-7xl bg-background">
            <Image
                src="/loris-tools.png"
                alt="loris.tools logo"
                width={204}
                height={204}
                sizes="204px"
                className="w-[204px] h-[204px] object-cover shrink-0"
            />
            <div className="flex flex-col justify-between self-stretch w-full">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="group cursor-pointer text-foreground/60 hover:text-foreground transition-colors"
                    >
                        <div className="text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                            [ expand ]
                        </div>
                    </button>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex">
                            <div className="flex gap-2 font-semibold text-xl">
                                <Link
                                    href="https://loris.tools"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-accent hover:text-accent/60 transition-colors"
                                >
                                    <span>[</span>
                                    <span>&#8599;</span>
                                    <span>loris.tools</span>
                                    <span>]</span>
                                </Link>
                                <p>founding engineer</p>
                            </div>
                        </div>

                        <div className="flex font-semibold max-w-2xl">
                            <span className="mr-2">{">"}</span>
                            <p>
                                crypto derivatives data platform featuring perps
                                & exchange analytics across funding, open
                                interest, volume, liquidations, order-book
                                depth, options and RWA
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-3 font-semibold text-accent">
                            <span>~50k MAU</span>
                            <span className="w-1 h-1 bg-accent"></span>
                            <span>40+ exchanges</span>
                            <span className="w-1 h-1 bg-accent"></span>
                            <span>paid API + subs</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <p className="text-sm text-foreground/60">
                        Oct 2025 - Present
                    </p>
                </div>
            </div>
        </div>
    );
}
