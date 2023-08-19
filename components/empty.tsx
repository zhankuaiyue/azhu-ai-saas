import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({label}:EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72 ">
                <Image
                alt="Empty"
                fill
                src="/empty.png"
                style={{ opacity: "20%" }}
                />
                <div className=" mt-64">
                <p className="text-muted-foreground text-sm text-center opacity-40   font-black">
                    {label}
                </p>
                </div>
            </div>

        </div>
    );
}