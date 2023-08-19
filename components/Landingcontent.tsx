"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const 特别声明 =[
    {
        name:"俱乐部项目",
        avatar:"a",
        title:"@衢州同城俱乐部",
        desscription:"除去API和服务器开销,剩余利润用于同城活动,资金使用会在网络公示."

    },
    {
        name:"开源代码",
        avatar:"a",
        title:"@无聊的阿祝",
        desscription:"根据油管博主Code With Antonio开源项目魔改,开源代码在Github上,欢迎Star."

    },
    {
        name:"AI模型",
        avatar:"a",
        title:"@无聊的阿祝",
        desscription:"支持国内外各大LLM模型,包括GPT-4,支持多种语言,可使用本地模型."

    },
    {
        name:"多功能",
        avatar:"a",
        title:"@无聊的阿祝",
        desscription:"支持多种功能模块,包括聊天机器人,代码解释,音乐生成,视频生成,图片生成."

    },
    
]

export const LandingContent = () => {
return(
<div className="px-10 pb-20">
    <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        特别声明
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {特别声明.map((item) => (
            
            <Card key={item.desscription} className="bg-[#192339] border-none text-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-x-2">
                        <div>
                            <p className="text-lg">
                                {item.name}
                            </p>
                            <p className="text-zinc-400 text-sm">
                                {item.title}
                            </p>
                        </div>
                        
                    </CardTitle>
                    {/* 字间距可调整 */}
                    <CardContent className="pt-4 px-0 hover:text-blue-500"
                    style={{ letterSpacing: '2px' }}
                    >
                        {
                            item.desscription
                        }
                    </CardContent>

                </CardHeader>

             </Card>
            
            ))}

    </div>

</div>
);
}