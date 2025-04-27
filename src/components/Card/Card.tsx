import { ReactNode } from "react";
import { cn } from "@app/lib/utils.ts";

type Props = {
    children: ReactNode;
    contentBackground?: "transparent" | "white"
    className?: string
}

export const Card = ({ children, contentBackground = "transparent", className }: Props) => {
    return (
        <div
            className={ cn(`vista-card-outer`, className) }>
            <div className={ cn('vista-card-inner', contentBackground === "white" && 'bg-white') }>
                { children }
            </div>
        </div>
    );
};