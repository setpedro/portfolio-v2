import { ScrollButton } from "@/components/ui/ScrollButton";

export default function CTA() {
    return (
        <div className="flex gap-1 flex-nowrap">
            <ScrollButton sectionId="projects" size="xl" color="accent">
                [ View projects ]
            </ScrollButton>
            <ScrollButton sectionId="socials" size="xl" color="foreground">
                [ Contact me ]
            </ScrollButton>
        </div>
    );
}
