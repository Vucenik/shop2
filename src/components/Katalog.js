import React from "react";
import { NavLink } from "react-router-dom";
export default function Katalog({categories}){
    const kategorije =categories.map((val,i)=>{
     return  <li key={val.name+i+1}><NavLink to={`/katalog/${i+1}`}
     //className={(isActive)=>isActive?"link-aktivni":undefined}
     >{val.name} </NavLink></li>
    })

    return(
        <>
      {kategorije}
        </>
    )

}