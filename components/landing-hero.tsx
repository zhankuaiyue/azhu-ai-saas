"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
    const {isSignedIn} = useAuth();
    return (
        <div className="text-white font-sans font-bold py-36 text-center space-y-4">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-4 font-extrabold">
                <h1 >你的AI助手</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "GPT-4 聊天机器人",
                                "代码解释",
                                "音乐生成",
                                "视频生成",
                                "图片生成",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400 ">
                提升学习创作效率 <span className="font-bold text-blue-500">x10</span> 倍
            </div>
            <div>
            <Link href={isSignedIn?"/dashboard":"/sign-up"} >
                <Button variant={"plus"}  className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                    免费试用
                </Button>
            </Link>

            </div>

      </div>
    )
}