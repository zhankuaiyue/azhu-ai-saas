import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { checkoutSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/subscription-button";

const SettingsPage = async() => {
    const isPro = await checkoutSubscription();
    return (
        <div>
            <Heading 
            title="设置" 
            descrption="管理您的帐户"
            icon={Settings}
            iconColor="text-sky-500"
            bgColor="bg-sky-100"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro ? "Plus订阅中" : "免费试用中"}

                </div>
                <SubscriptionButton  isPro={isPro}  />
            </div>

        </div>
);
}
export default SettingsPage;
