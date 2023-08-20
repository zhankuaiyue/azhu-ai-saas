import {Avatar, AvatarFallback, AvatarImage} from"@/components/ui/avatar";

export const BotAvator = () => {
    return (
        <Avatar className="h-12 w-12">
            <AvatarImage className="p-0" src="/logo.svg"/>

        </Avatar>
    );
};