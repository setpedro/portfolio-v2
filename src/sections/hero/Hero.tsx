import { Button } from "@/components/ui/Button";
import { boxInfo, principles } from "@/lib/consts/sections/hero";
import { Principles } from "./Principles";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col gap-6 pt-25 sm:pt-30">
            <div className="flex flex-col lg:flex-row lg:gap-3">
                <div>
                    <img src="/ascii-name.svg" alt="ASCII Name" />
                </div>
                <div className="flex gap-3 font-bold text-lg md:text-xl lg:text-2xl mt-auto px-1 lg:px-0 lg:py-1.5">
                    <p>as</p>
                    <p className="text-accent">setPedro</p>
                </div>
            </div>

            <div className="flex flex-1 w-fit sm:mt-6 lg:gap-18">
                <div className="flex flex-col gap-10 sm:gap-16 lg:justify-between sm:pb-40 sm:px-4 lg:pr-0 pt-2 lg:pt-4 w-full lg:w-4/5 xl:w-3/4">
                    <div className="flex flex-col mx-2 gap-5 p-4 sm:p-6 border border-accent">
                        {boxInfo.map((line) => (
                            <div
                                key={line}
                                className="flex font-semibold sm:text-xl"
                            >
                                <span className="mr-1">{">"}</span>
                                <p>{line}</p>
                            </div>
                        ))}
                    </div>

                    {/* mobile principles */}
                    <div className="lg:hidden flex justify-end pr-6 gap-4 sm:px-6 sm:gap-8 md:gap-14">
                        {principles.map((p) => (
                            <Principles
                                key={p.title}
                                title={p.title}
                                items={p.items}
                            />
                        ))}
                    </div>

                    <div className="flex gap-1 flex-nowrap">
                        <Button size="xl" color="accent">
                            [ View projects ]
                        </Button>
                        <Button size="xl" color="foreground">
                            [ Contact me ]
                        </Button>
                    </div>
                </div>

                {/* desktop principles */}
                <div className="hidden lg:flex lg:flex-col gap-20">
                    {principles.map((p) => (
                        <Principles
                            key={p.title}
                            title={p.title}
                            items={p.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
