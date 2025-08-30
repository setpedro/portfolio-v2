import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

type Project = {
    title: string;
    info: string;
    webLink: string;
    ghLink: string;
    logoExt: string;
};

export function Project({ title, info, webLink, ghLink, logoExt }: Project) {
    return (
        <div className="relative border border-accent p-3">
            <span className="absolute -top-4 left-4 sm:left-4 bg-background px-3 text-accent text-xl font-semibold">
                {title}
            </span>

            <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="flex p-1 items-center justify-center">
                    <Image
                        src={`/${title}.${logoExt}`}
                        alt={`${title} Logo`}
                        width={256}
                        height={256}
                    />
                </div>
                <div className="w-full flex flex-col sm:justify-between gap-2.5 sm:gap-0">
                    <div className="flex font-semibold">
                        <span className="mr-1">{">"}</span>
                        <p>{info}</p>
                    </div>
                    <div className="flex justify-end gap-1 p-2">
                        <Link href={webLink}>
                            <Button size="md" color="accent">
                                [ Web ]
                            </Button>
                        </Link>
                        <Link href={ghLink}>
                            <Button size="md" color="foreground">
                                [ Tech ]
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
