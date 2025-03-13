import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@app/lib/utils.ts";

type Props = {
    variant?: "default" | "primary" | "secondary" | "success" | "destructive" | "info";
    children: ReactNode
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>


const customBackgrounds = {
    default: "linear-gradient(to bottom, #f8f8f8 0%, #f0f0f0 20%, #e8e8e8 40%, #e0e0e0 60%, #d8d8d8 80%, #d0d0d0 100%)",
    primary: "linear-gradient(to bottom, #4592f0 0%, #3b84ed 20%, #3176e0 40%, #2769d3 60%, #1d5bc6 80%, #1248b9 100%)",
    secondary: "linear-gradient(to bottom, #c2a4e9 0%, #b191e1 20%, #a17ed9 40%, #916bd2 60%, #8158ca 80%, #7045c2 100%)",
    info: "linear-gradient(to bottom, #7dd6ff 0%, #65ceff 20%, #4dc7ff 40%, #35bffa 60%, #1cb8f6 80%, #00b0f2 100%)",
    destructive: "linear-gradient(to bottom, #ff6b6b 0%, #ff5a5a 20%, #ff4949 40%, #fa3838 60%, #f52727 80%, #f01616 100%)",
    success: "linear-gradient(to bottom, #8be46b 0%, #7ad75a 20%, #69ca49 40%, #58bd38 60%, #47b027 80%, #36a316 100%)"
};

const buttonVariants = cva(
    "relative h-10 px-6 rounded-md shadow-md overflow-hidden group border border-white/30 shadow-md",
    {
        variants: {
            variant: {
                default: "border-white/30 shadow-md",
                primary: "border-white/30 shadow-md",
                secondary: "border-white/30 shadow-md",
                info: "border-white/30 shadow-md",
                destructive: "border-white/30 shadow-md",
                success: "border-white/30 shadow-md"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

// Define text color variants
const textVariants = cva("relative font-semibold drop-shadow-sm", {
    variants: {
        variant: {
            default: "text-gray-800",
            primary: "text-white drop-shadow-xl",
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
            style={ { background: customBackgrounds[variant] } }
            { ...props }
        >
            {/* Glass effect overlay */ }
            <div className="absolute inset-0 bg-white opacity-25 rounded-md backdrop-blur-sm"></div>

            {/* Top highlight */ }
            <div
                className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-white via-white to-transparent opacity-50 rounded-t-md"></div>

            {/* Text content */ }
            <span className={ textVariants({ variant }) }>{ children }</span>

            {/* Bottom shadow for depth */ }
            <div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-15 group-hover:opacity-0 transition-opacity"></div>

            {/* Hover effect */ }
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white/50 transition-opacity duration-200"></div>
        </button>
    );
};
