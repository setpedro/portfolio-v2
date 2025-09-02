"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useScrollRedirect(onHomePage: boolean) {
    const router = useRouter();

    useEffect(() => {
        if (!onHomePage) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const scrollTarget = params.get("scroll");

        if (scrollTarget) {
            const element = document.getElementById(scrollTarget);
            if (element) {
                setTimeout(
                    () => element.scrollIntoView({ behavior: "smooth" }),
                    50
                );
            }
            // remove query from URL without reload
            router.replace("/", { scroll: false });
        }
    }, [onHomePage, router]);
}
