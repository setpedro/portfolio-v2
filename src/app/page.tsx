export default function Home() {
    return (
        <div className="flex flex-col min-h-screen gap-8 px-4 sm:px-8 md:px-16 lg:px-22 xl:px-40">
            {/* navbar */}
            <div className="h-16"></div>

            {/* header */}
            <div className="flex flex-col lg:flex-row lg:gap-3">
                <div>
                    <img src="/ascii-name.svg" alt="ASCII Name" />
                </div>
                <div className="flex gap-3 font-bold text-lg md:text-xl lg:text-2xl mt-auto px-1 lg:px-0 lg:py-1.5">
                    <p>as</p>
                    <p className="text-accent">setPedro</p>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-1 w-fit mt-8 sm:mt-13 lg:gap-18">
                {/* box & cta */}
                <div className="flex flex-col gap-10 sm:gap-16 lg:justify-between sm:pb-40 sm:px-4 lg:pr-0 pt-4 w-full lg:w-4/5 xl:w-3/4">
                    {/* box */}
                    <div className="flex flex-col mx-2 gap-5 p-4 sm:p-6 border border-accent">
                        {/* piece of info */}
                        <div className="flex font-semibold sm:text-xl">
                            <span className="mr-1">{">"}</span>
                            <p>
                                full-stack developer focused on web apps, crypto
                                & systems programming
                            </p>
                        </div>
                        {/* piece of info */}
                        <div className="flex font-semibold">
                            <span className="mr-1">{">"}</span>
                            <p>
                                currently: looking for my next role or project
                            </p>
                        </div>
                    </div>

                    {/* mobile principles */}
                    <div className="lg:hidden flex justify-end pr-6 gap-4 sm:px-6 sm:gap-8 md:gap-14">
                        {/* shipping */}
                        <div className="font-bold flex">
                            <span className="italic text-accent text-xl sm:text-2xl mr-4">
                                $
                            </span>
                            <div>
                                <p className="italic text-accent text-xl sm:text-2xl">
                                    shipping
                                </p>
                                <p className="sm:text-xl">web</p>
                                <p className="sm:text-xl">crypto</p>
                                <p className="sm:text-xl">games</p>
                                <p className="sm:text-xl">tools</p>
                            </div>
                        </div>

                        {/* prioritizing */}
                        <div className="font-bold flex">
                            <span className="italic text-accent text-xl sm:text-2xl mr-4">
                                $
                            </span>
                            <div>
                                <p className="italic text-accent text-xl sm:text-2xl">
                                    prioritizing
                                </p>
                                <p className="sm:text-xl">usability</p>
                                <p className="sm:text-xl">speed</p>
                                <p className="sm:text-xl">architecture</p>
                                <p className="sm:text-xl">impact</p>
                            </div>
                        </div>
                    </div>

                    {/* cta */}
                    <div className="flex font-bold text-lg sm:text-3xl gap-1 flex-nowrap">
                        <button className="text-accent whitespace-nowrap">
                            [ View projects ]
                        </button>
                        <button className="whitespace-nowrap">
                            [ Contact me ]
                        </button>
                    </div>
                </div>

                {/* desktop principles */}
                <div className="hidden lg:flex lg:flex-col gap-20">
                    {/* shipping */}
                    <div className="font-bold flex">
                        <span className="italic text-accent text-2xl mr-4">
                            $
                        </span>
                        <div>
                            <p className="italic text-accent text-2xl">
                                shipping
                            </p>
                            <p className="text-xl">web</p>
                            <p className="text-xl">crypto</p>
                            <p className="text-xl">games</p>
                            <p className="text-xl">tools</p>
                        </div>
                    </div>

                    {/* prioritizing */}
                    <div className="font-bold flex">
                        <span className="italic text-accent text-2xl mr-4">
                            $
                        </span>
                        <div>
                            <p className="italic text-accent text-2xl">
                                prioritizing
                            </p>
                            <p className="text-xl">usability</p>
                            <p className="text-xl">speed</p>
                            <p className="text-xl">architecture</p>
                            <p className="text-xl">impact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
