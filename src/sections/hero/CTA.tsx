"use client";

import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

export default function CTA() {
    return (
        <div className="flex gap-1 flex-nowrap">
            <Button
                size="xl"
                color="accent"
                onClick={() => scrollToSection("projects")}
            >
                [ View projects ]
            </Button>
            <Button
                size="xl"
                color="foreground"
                onClick={() => scrollToSection("socials")}
            >
                [ Contact me ]
            </Button>
        </div>
    );
}
