import { time } from 'console';
import React, {useState} from 'react'

interface Props {
    filterItems: (category: any) => void
    categories: any,
    activeCategory: any,
}
export default function Menubar({filterItems, categories, activeCategory}:Props) {
    return(
        <div className="w-full md:h-[64px] md:max-w-[1200px menu-wrap">
            <div className="flex flex-wrap md:h-[40px] py-[10px] menu-out">
                <div className="w-full md:h-[40px] flex items-center overflow-hidden">
                    {categories.map((item:any,index:number) => (
                        <div className={`inline-flex items-center md:h-[40px] hover:cursor-pointer hover:bg-[#f4f4f4] rounded-[24px] text-[17px] px-[14px] ${activeCategory == item.title ? "bg-[#f4f4f4]" : ""}`}
                            onClick={() => filterItems(item.title)}
                            key={index}
                        >
                            {item.title}
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}