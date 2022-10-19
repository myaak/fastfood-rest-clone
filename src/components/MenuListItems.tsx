import React, { useMemo, useState } from 'react'
import { menuList } from "../constants/menuList"
import MenuItem from "./MenuItem"


interface Props {
    selectedCategory:any
}
const MenuListItems = ({selectedCategory}:Props) => useMemo(() => {
    console.log(1)
    return(
        <div className="menu-grid-items">
            <ul className="flex flex-wrap md:max-w-[1200px]">
                {selectedCategory.map((item:any, index:any) => (
                <MenuItem
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageSrc={item.imageSrc}
                />
                ))
                }
            </ul>
        </div>
    )
},[selectedCategory])

export default MenuListItems