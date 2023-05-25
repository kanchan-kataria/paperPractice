import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Product(){
    return(
        <>
            <input type='search' placeholder='Search Bar'/>
            <nav> 
                <NavLink to='feature'>Feature</NavLink>
                <NavLink to='new'>New</NavLink>

                <Outlet/>
            </nav>
        
        </>
    )
}