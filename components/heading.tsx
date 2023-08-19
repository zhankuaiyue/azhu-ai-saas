import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    descrption: string;
    icon:LucideIcon;
    iconColor?:string;
    bgColor?:string;

}



export const Heading = ({
    title,
    descrption,
    icon:Icon,
    iconColor,
    bgColor
}:HeadingProps) => {
    return (
        <div>
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
                <div className={cn(
                "p-2 w-fit rounded-md",bgColor)}>
                    <Icon className={cn("w-10 h-10",iconColor)} />
                </div>
                <div className="text-3xl font-bold font-sans">
                    <h2>{title}</h2>
                    <p className="font-light  text-base">{descrption}</p>
                </div>

            </div>

        </div>
    )
};