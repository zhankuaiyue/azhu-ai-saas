"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, Video, CodeIcon, Music, Settings, ImageIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";

const monserrat = Montserrat({
    subsets: ["latin"],
    weight: "700"
});

const routes = [
    {
        label: "主页",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "对话",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-sky-500"
    },
    {
        label: "生成图片",
        icon: ImageIcon,
        href: "/image",
        color: "text-sky-500"
    },
    {
        label: "视频生成",
        icon: Video,
        href: "/video",
        color: "text-sky-500"
    },
    {
        label: "代码解读",
        icon: CodeIcon,
        href: "/code",
        color: "text-sky-500"
    },
    {
        label: "生成音乐",
        icon: Music,
        href: "/music",
        color: "text-sky-500"
    },
    {
        label: "设置",
        icon: Settings,
        href: "/settings",
        color: "text-green-500"
    }
];

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const Sidebar = ({
    apiLimitCount = 0,
    isPro = false,
}: SidebarProps) => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-4 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-5 mb-10">
                    <div className="relative w-16 h-16 mr-3">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.svg"
                        />

                    </div>
                    <h1 className={cn(" monserrat font-bold  text-2xl",
                        monserrat.className)}>
                        ISMISM-AI
                    </h1>

                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium rounded-lg translation hover:text-white hover:bg-white/10",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn(
                                    "h-5 w-5 mr-2 ", route.color)} />
                                {route.label}

                            </div>

                        </Link>
                    ))}

                </div>
            </div>
            <FreeCounter
                isPro={isPro}
                apiLimitCount={apiLimitCount}


            />
        </div>
    );
}
export default Sidebar;
