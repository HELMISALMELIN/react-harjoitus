import React from "react";
import { Item } from "./Item";
import { items } from "./Itemdatabase";

export const Items=(props)=>{
    return(
        <div>
            {
                items.map(({title, img, description})=>
                <Item
                    title={title}
                    img={img}
                    description = {description}             
                />
                )
            }
        </div>
    )
}