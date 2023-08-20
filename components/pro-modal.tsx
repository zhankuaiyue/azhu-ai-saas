"use client"
import * as lucideReact from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

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

export const ProModal = () => {
    const proModal = useProModal();
    const [loading, setLoading] = useState(false);
    
    const onSubscribe = async() => {
        try {
            setLoading(true);
            const response = axios.get("/api/stripe");

            window.location.href = (await response).data.url;
        } catch (error) {
            console.log(error,"STRIPE_CLIENT_ERROR");
        }finally{
            setLoading(false);
        }
    };



    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-sans font-bold py-1">
                            订阅 ISMISM-AI
                            <Badge className="uppercase text-sm py-1" variant={"plus"}>
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={"tool.label"}
                                className="p-3 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div
                                        className={cn(
                                            "p-2 w-fit rounded-full flex items-center justify-center",
                                            tool.bgColor
                                        )}
                                    >
                                        <tool.icon className={cn("w-6 h-6 ", tool.color)}
                                        />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <lucideReact.Check  className="text-primary w-5 h-5"/>

                            </Card>
                        ))}

                    </DialogDescription>

                </DialogHeader>
                <DialogFooter>
                    <Button 
                    onClick={onSubscribe}
                    size="lg"
                    variant="plus" 
                    className="w-full"
                    >
                        立即订阅
                        <Zap  className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>

            </DialogContent>

        </Dialog>
    );
}