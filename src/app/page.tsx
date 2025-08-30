import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/hero";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen gap-6 px-4 sm:px-8 md:px-16 lg:px-22 xl:px-40">
            <Navbar />
            
            <Hero />
        </div>
    );
}
