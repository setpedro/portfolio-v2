import { cn } from "@/lib/utils";

type SectionHeader = {
    title: string;
    subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeader) {
    return (
        <div
            className={cn(
                "w-full flex",
                !subtitle
                    ? "justify-start"
                    : "flex-col lg:flex-row lg:justify-start lg:items-end gap-2 lg:gap-4"
            )}
        >
            <p className="text-3xl sm:text-6xl font-bold text-accent">
                {`# ${title}`}
            </p>
            {subtitle && (
                <p className="text-sm sm:text-2xl font-bold text-foreground/60">
                    {`//${subtitle}`}
                </p>
            )}
        </div>
    );
}
