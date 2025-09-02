import { Navbar } from "@/components/Navbar";
import { About } from "@/sections/about/About";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Socials } from "@/sections/socials/Socials";

export default function Home() {
    return (
        <div className="relative">
            <Navbar />

            <div className="px-4 sm:px-8 md:px-16 lg:px-22 xl:px-40">
                <Hero />
                <Projects />
                <About />
                <Socials />
            </div>
        </div>
    );
}
