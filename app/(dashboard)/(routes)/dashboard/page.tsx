"use client";
import * as lucideReact from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "开始AI对话",
        icon: lucideReact.MessageSquare,
        color: "text-sky-500",
        bgColor: "bg-sky-100",
        href: "/conversation",
    },
    {
        label: "生成图片",
        icon: lucideReact.Image,
        color: "text-sky-500",
        bgColor: "bg-sky-100",
        href: "/image",
    },
    {
        label: "生成视频",
        icon: lucideReact.Video,
        color: "text-sky-500",
        bgColor: "bg-sky-100",
        href: "/video",
    },
    {
        label: "代码解读",
        icon: lucideReact.Code,
        color: "text-sky-500",
        bgColor: "bg-sky-100",
        href: "/code",

    },
    {
        label: "生成音乐",
        icon: lucideReact.Music,
        color: "text-sky-500",
        bgColor: "bg-sky-100",
        href: "/music",
    },
]

const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-3  text-center ">
                <h2 className="text-2xl md:text-4xl font-bold font-sans ">
                    人工智能,启动!
                </h2>
                <p className=" text-muted-foreground font-light text-sm md:text-lg">
                    Power by Azhu
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                    onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn(
                                "p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn(
                                    "w-8 h-8", tool.color)}
                                />
                            </div>
                            <div className="flex flex-col font-bold font-sans 
                              tracking-wider ">
                                {tool.label}
                            </div>
                        </div>
                        <lucideReact.ArrowRight className="w-5 h-5 text-gray-500" />
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default DashboardPage;