"use client";

import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export function BackFromLabs() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/?scroll=projects");
    };

    return (
        <div className="w-full flex justify-start">
            <Button
                size="md"
                color="foreground"
                title="More projects"
                onClick={handleClick}
            >
                [ Go back
                <span className="ml-2 mr-3 mb-2 text-3xl leading-none">
                    &#8601;
                </span>
                ]
            </Button>
        </div>
    );
}
