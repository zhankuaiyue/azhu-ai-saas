"use client";
import axios from "axios";
import * as z from "zod";
import { Heading } from "@/components/heading";
import * as lucideReact from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvator } from "@/components/bot-avatar";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const CodePage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt,
            };

            const newMessages = [...messages, userMessage];

            const response = await axios.post("/api/code", {
                messages: newMessages,
            });

            setMessages((current) => [...current, userMessage, response.data]);

            form.reset();


        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();

            }else{
                toast.error("AI出错了,请稍后再试!")
            }

        } finally {
            router.refresh();
        }
    };

    return (
        <div>
            <Heading
                title="Code Assistant"
                descrption="代码准备就绪,开始测试吧!"
                icon={lucideReact.Code}
                iconColor="text-blue-500"
                bgColor="bg-blue-100"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                        rounded-lg
                        border
                        w-full
                        p-4
                        px-3
                        md:px-6
                        focus-within:shadow-lg
                        grid
                        grid-cols-12
                        gap-2
                        "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="
                                    border-0 
                                    outline-none
                                    focus-visble:ring-0
                                    focus-visible:ring-transparent
                                    "
                                                disabled={isLoading}
                                                placeholder="这段代码作者的用意是什么,想达到什么效果呢?请在解答后,再给出每行的中文注释。"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                                发送
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading&& (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>)}
                    {messages.length === 0 && !isLoading && (

                        <Empty label=" AI正在赶来的路上! " />

                    )}
                    <div className="flex flex-col-reverse gap-y-4">
                        {messages.map((message) => (
                            <div 
                            key={message.content}
                            className={cn(
                                "p-8 w-full flex items-start gap-x-8 rounded-lg",
                                message.role === "user"? 
                                "bg-white border border-black/10":"bg-muted"
                                )}
                            >
                                {message.role === "user"?<UserAvatar/>:<BotAvator/>}
                                <ReactMarkdown
                                    components={{
                                        pre: ({node, ...props}) => (
                                        <div  className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                                            <pre{...props}/>
                                        </div>
                                        ),
                                        code: ({node, ...props}) => (
                                            <code className="bg-black/10 rounded-lg p-1"{...props}/>
                                        )
                                    }}
                                    className="text-sm overflow-hidden leading-7"
                                >
                                {message.content || ""}
                                </ReactMarkdown>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
export default CodePage;
