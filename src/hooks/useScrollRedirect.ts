import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useScrollRedirect(onHomePage: boolean) {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!onHomePage) return;

        const scrollTarget = searchParams.get("scroll");
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
    }, [onHomePage, searchParams, router]);
}
