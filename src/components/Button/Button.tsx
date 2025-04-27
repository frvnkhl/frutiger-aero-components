import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@app/lib/utils.ts";

type Props = {
    variant?: "default" | "primary" | "secondary" | "success" | "destructive" | "info";
    children: ReactNode
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants = cva(
    "relative h-10 px-6 rounded-md shadow-md overflow-hidden group border border-white/30 shadow-md text-lg",
    {
        variants: {
            variant: {
                default: "border-white/10 shadow-md bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400",
                primary: "border-white/10 shadow-md bg-gradient-to-br from-sky-400 via-blue-600 to-blue-800",
                secondary: "border-white/10 shadow-md bg-gradient-to-br from-violet-400 via-violet-600 to-violet-800",
                info: "border-white/10 shadow-md bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800",
                destructive: "border-white/10 shadow-md bg-gradient-to-br from-red-400 via-red-600 to-red-800",
                success: "border-white/10 shadow-md bg-gradient-to-br from-green-400 via-green-600 to-green-800"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

// Define text color variants
const textVariants = cva("relative font-normal text-md drop-shadow-sm", {
    variants: {
        variant: {
            default: "text-black",
            primary: "text-white",
            secondary: "text-white",
            info: "text-white",
            destructive: "text-white",
            success: "text-white"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

export const Button = ({ variant = "default", children, className = "", ...props }: Props) => {
    return (
        <button
            className={ cn("cursor-pointer", buttonVariants({ variant }), className) }
            { ...props }
        >
            <div className="absolute inset-0 bg-white opacity-5 rounded-md backdrop-blur-sm"></div>
            <span className={ textVariants({ variant }) }>{ children }</span>

            <div
                className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/20"></div>
            <div className="absolute inset-0 top-0 h-1/2 bg-white/30"></div>
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white/50 transition-opacity duration-200"></div>
        </button>
    );
};
