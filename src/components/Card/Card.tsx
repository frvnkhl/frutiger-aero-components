import { ReactNode } from "react";
import { cn } from "@app/lib/utils.ts";

type CardProps = {
    children: ReactNode;
    contentBackground?: "transparent" | "white"
    className?: string
}

export const Card = ({ children, contentBackground = "transparent", className }: CardProps) => {
    return (
        <div
            className={ cn(`vista-card-outer`, className) }>
            <div className={ cn('vista-card-inner', contentBackground === "white" && 'bg-white') }>
                { children }
            </div>
        </div>
    );
};