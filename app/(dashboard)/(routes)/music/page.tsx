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
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";


const MusicPage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [music, setMusic] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined);

            const response = await axios.post("/api/music", values);

            setMusic(response.data.audio);

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
                title="Music Generation"
                descrption="AI准备就绪,开始对话吧!"
                icon={lucideReact.Music}
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
                                                placeholder="例如: 来一首爵士乐?"
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
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>)}
                    {!music && !isLoading && (

                        <Empty label=" AI正在赶来的路上! " />

                    )}
                    {music && (
                        <audio controls className="w-full mt-8">
                            <source src={music} />

                        </audio>
                    )}
                </div>
            </div>
        </div>
    );
}
export default MusicPage;
