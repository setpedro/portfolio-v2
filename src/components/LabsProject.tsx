import Link from "next/link";

type LabsProject = {
    id: string;
    info: string;
};

export function LabsProject({ id, info }: LabsProject) {
    return (
        <div className="px-5 py-4">
            <Link href={`https://github.com/setpedro/${id}`}>
                <span className="text-accent font-semibold whitespace-nowrap">
                    [ <span className="text-2xl leading-none">&#8599;</span>{" "}
                    {id} ]:
                </span>
            </Link>
            <span className="ml-1">{info}</span>
        </div>
    );
}
