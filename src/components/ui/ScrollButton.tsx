"use client";

import { Button } from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "@/lib/utils";
import { ReactNode } from "react";
import { WithClassName } from "@/types";

type ScrollButtonProps = {
    sectionId: string;
    children: ReactNode;
    size: "md" | "xl";
    color: "foreground" | "accent";
} & WithClassName;

export function ScrollButton({
    sectionId,
    children,
    size = "md",
    color = "foreground",
    className,
}: ScrollButtonProps) {
    const router = useRouter();
    const pathname = usePathname();
    const onHomePage = pathname === "/";

    const handleClick = () => {
        if (onHomePage) {
            scrollToSection(sectionId);
        } else {
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
