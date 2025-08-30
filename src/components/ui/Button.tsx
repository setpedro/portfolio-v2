import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { WithClassName } from "@/types";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    WithClassName & {
        size: "md" | "xl";
        color: "accent" | "foreground";
    };

const classes = {
    base: "flex items-center font-bold transition-all duration-100 transform hover:cursor-pointer whitespace-nowrap",
    variants: {
        sizes: {
            md: "sm:text-xl",
            xl: "text-lg sm:text-3xl ",
        },
        colors: {
            accent: "text-accent hover:text-accent/60",
            foreground: "text-foreground, hover:text-foreground/60",
        },
    },
} as const;

export function Button({
    children,
    className,
    size,
    color,
    ...restProps
}: Props) {
    return (
        <button
            className={cn(
                classes.base,
                classes.variants.sizes[size],
                classes.variants.colors[color],
                className
            )}
            {...restProps}
        >
            {children}
        </button>
    );
}
