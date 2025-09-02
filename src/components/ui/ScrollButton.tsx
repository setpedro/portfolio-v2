"use client";

import { Button } from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "@/lib/utils";
import { ReactNode } from "react";
import { WithClassName } from "@/types";

type ScrollButtonProps = {
    sectionId?: string;
    scrollToBottom?: boolean;
    children: ReactNode;
    size?: "md" | "xl";
    color?: "foreground" | "accent";
} & WithClassName;

export function ScrollButton({
    sectionId,
    scrollToBottom = false,
    children,
    size = "md",
    color = "foreground",
    className,
}: ScrollButtonProps) {
    const router = useRouter();
    const pathname = usePathname();
    const onHomePage = pathname === "/";

    const handleClick = () => {
        if (scrollToBottom) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });
        } else if (onHomePage && sectionId) {
            scrollToSection(sectionId);
        } else if (sectionId) {
            router.push(`/?scroll=${sectionId}`);
        }
    };

    return (
        <Button
            size={size}
            color={color}
            onClick={handleClick}
            className={className}
        >
            {children}
        </Button>
    );
}
