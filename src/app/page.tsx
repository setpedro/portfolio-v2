import { Navbar } from "@/components/Navbar";
import { About } from "@/sections/about/About";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";

export default function Home() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-2 sm:px-2 md:px-10 lg:px-16 xl:px-34">
                <Navbar />
            </div>

            <div className="px-4 sm:px-8 md:px-16 lg:px-22 xl:px-40">
                <Hero />
                <Projects />
                <About />
            </div>
        </div>
    );
}
