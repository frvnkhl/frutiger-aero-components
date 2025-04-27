import { useState } from "react";
import { cn } from "@app/lib/utils.ts";

export type AccordionItem = {
    title: string,
    content: string,
    key: string
}

type Props = {
    items: AccordionItem[]
    className: string
}


export const Accordion = ({ items, className }: Props) => {
    const [openedItem, setOpenedItem] = useState<string | null>(null);

    const toggleItem = (key: string) => {
        setOpenedItem(openedItem === key ? null : key);
    }


    return (
        <div className={ cn("w-full my-4 flex flex-col rounded-lg", className) }>
            {
                items.map(item => (
                    <div key={ item.key }
                         className="w-full cursor-pointer p-2 rounded-lg hover:bg-gradient-to-b from-white to-blue-100 hover:border  hover:border-blue-400"
                         onClick={ () => toggleItem(item.key) }>
                        <div className=" flex justify-between ">
                            <h3 className="font-semibold text-2xl">{ item.title }</h3>
                            <span><img alt="arrow" src="/src/assets/arrow.png"
                                       className={ cn(openedItem === item.key ? "rotate-270" : "rotate-90", "ease-in-out transition-all size-8") }/></span>
                        </div>
                        { openedItem === item.key &&
                            <div className="transition-all ease-in-out">{ item.content }</div> }
                    </div>
                ))
            }
        </div>
    )
};