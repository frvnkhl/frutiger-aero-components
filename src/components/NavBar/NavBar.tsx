import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@app/lib/utils.ts";
import { NavItem } from "./NavItem.tsx";
// Types for the navigation item
export type NavItem = {
    label: string;
    href: string;
    icon?: ReactNode;
    active?: boolean;
};

// Props for the NavBar component
type NavBarProps = {
    items: NavItem[];
    variant?: "default" | "blue" | "black" | "silver";
    className?: string;
    logo?: ReactNode;
    actions?: ReactNode;
};

// Custom background gradients for authentic Vista/7 Aero
const customBackgrounds = {
    default: "linear-gradient(to bottom, rgba(235,245,255,0.9) 0%, rgba(205,225,255,0.9) 50%, rgba(185,215,255,0.9) 51%, rgba(215,235,255,0.9) 100%)",
    blue: "linear-gradient(to bottom, rgba(130,185,255,0.9) 0%, rgba(90,155,235,0.9) 50%, rgba(75,145,220,0.9) 51%, rgba(110,175,245,0.9) 100%)",
    black: "linear-gradient(to bottom, rgba(110,110,120,0.9) 0%, rgba(80,80,90,0.9) 50%, rgba(70,70,80,0.9) 51%, rgba(90,90,100,0.9) 100%)",
    silver: "linear-gradient(to bottom, rgba(245,245,255,0.9) 0%, rgba(225,225,235,0.9) 50%, rgba(215,215,225,0.9) 51%, rgba(235,235,245,0.9) 100%)"
};

// Define navbar variants
const navbarVariants = cva(
    "relative h-12 border border-white/50 shadow-lg backdrop-blur-md",
    {
        variants: {
            variant: {
                default: "rounded-md",
                blue: "rounded-md",
                black: "rounded-md",
                silver: "rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);


export const NavBar = ({
                           items,
                           variant = "default",
                           className = "",
                           logo,
                           actions,
                       }: NavBarProps) => {
    return (
        <nav
            className={ cn("cursor-default", navbarVariants({ variant }), className) }
            style={ { background: customBackgrounds[variant] } }
        >
            {/* Glossy glass effect with reflection */ }
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/30 rounded-t-md"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/20"></div>

            {/* Shine edge effects */ }
            <div className="absolute inset-x-0 top-0 h-px bg-white/70"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-black/20"></div>

            {/* Content container */ }
            <div className="relative flex items-center justify-between h-full w-full px-3">
                {/* Logo/Start button area */ }
                <div className="flex items-center h-full">
                    { logo && (
                        <div className="relative mr-4 group">
                            <div
                                className="absolute inset-0 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-20">{ logo }</div>
                        </div>
                    ) }
                </div>

                {/* Navigation items */ }
                <div className="flex items-center space-x-1 h-full py-1">
                    { items.map((item, index) => (
                        <NavItem
                            key={ index }
                            href={ item.href }
                            active={ item.active }
                            variant={ variant }
                        >
                            { item.icon && <span className="mr-2">{ item.icon }</span> }
                            { item.label }
                        </NavItem>
                    )) }
                </div>

                {/* Action buttons/system tray area */ }
                { actions && (
                    <div className="flex items-center space-x-2 h-full">
                        { actions }
                    </div>
                ) }
            </div>
        </nav>
    );
};


// Export a Vista Orb-inspired start button
export const VistaStartOrb = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button
            onClick={ onClick }
            className="relative flex items-center justify-center size-15 rounded-full cursor-pointer overflow-hidden group"
        >
            {/* Orb background gradients */ }
            <div
                className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-600 to-blue-700 rounded-full"></div>

            {/* Glossy effect */ }
            <div
                className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/20 rounded-full"></div>
            <div className="absolute inset-0 top-0 h-1/2 bg-white/30 rounded-t-full"></div>

            {/* Windows logo */ }
            <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-3 h-3 bg-red-500 transform skew-y-[12deg] rounded-md"></div>
                    <div className="w-3 h-3 bg-green-500 transform skew-y-[12deg] translate-x-[-1px] rounded-md"></div>
                    <div className="w-3 h-3 bg-blue-400 transform skew-y-[12deg] rounded-md"></div>
                    <div className="w-3 h-3 bg-yellow-500 transform skew-y-[12deg] translate-x-[-1px] rounded-md"></div>

                </div>
            </div>

            {/* Hover effect */ }
            <div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
        </button>
    );
};

