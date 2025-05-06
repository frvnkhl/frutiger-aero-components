import { ReactNode } from "react";
import { cn } from "@app/lib/utils.ts";
import { cva } from "class-variance-authority";

type Props = {
    children: ReactNode;
    href: string;
    active?: boolean;
    variant?: "default" | "blue" | "black" | "silver";
};

const navTextVariants = cva("relative font-semibold drop-shadow-sm", {
    variants: {
        variant: {
            default: "text-gray-800",
            blue: "text-white",
            black: "text-white",
            silver: "text-gray-800",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const NavItem = ({
                            children,
                            href,
                            active = false,
                            variant = "default",
                        }: Props) => {
    const textColorClass = active
        ? "text-white font-bold"
        : navTextVariants({ variant });

    return (
        <a
            href={href}
            className={cn(
                "relative group flex items-center h-full px-4 rounded-md transition-all duration-200",
                active && "bg-black/20"
            )}
        >
            {/* Base pill shape */}
            <div className="absolute inset-0 rounded-md transition-all duration-200 opacity-0 group-hover:opacity-50">
                {/* Gradient background for hover/active state */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-md",
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    )}
                    style={{
                        background: active
                            ? "linear-gradient(to bottom, rgba(90,130,180,0.9) 0%, rgba(65,105,155,0.9) 50%, rgba(55,95,140,0.9) 51%, rgba(75,115,165,0.9) 100%)"
                            : "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(235,235,235,0.3) 100%)"
                    }}
                ></div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 rounded-md bg-gradient-to-b from-white/40 to-transparent"></div>
            </div>

            {/* Text content */}
            <span
                className={cn(
                    "relative z-10 transition-all",
                    textColorClass,
                    "group-hover:drop-shadow-md",
                    active && "drop-shadow-md"
                )}
            >
        {children}
      </span>
        </a>
    );
};