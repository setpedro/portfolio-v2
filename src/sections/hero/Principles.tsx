type Principles = {
    title: string;
    items: string[];
};

export function Principles({ title, items }: Principles) {
    return (
        <div className="font-bold flex">
            <span className="italic text-accent text-xl sm:text-2xl mr-4">
                $
            </span>
            <div>
                <p className="italic text-accent text-xl sm:text-2xl">
                    {title}
                </p>
                {items.map((item) => (
                    <p key={item} className="sm:text-xl">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
