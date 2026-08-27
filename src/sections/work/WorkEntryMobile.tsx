import Image from "next/image";
import Link from "next/link";

export function WorkEntryMobile() {
    return (
        <div className="flex flex-col gap-2 border border-accent/20 p-2 w-full max-w-[512px] bg-background">
            <div className="mx-auto relative w-full max-w-[512px] aspect-square">
                <Image
                    src="/loris-tools.png"
                    alt="loris.tools logo"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col w-full">
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

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-col gap-1 font-semibold text-xl">
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

                        <div className="flex font-semibold">
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
                        <div className="flex flex-wrap items-center gap-3 font-semibold text-accent">
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
