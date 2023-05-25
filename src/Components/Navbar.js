import React from 'react'
import {NavLink} from 'react-router-dom'

const Styling=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        textDecoration:isActive?'none':'underline'
    }
}
export default function Navbar(){
    return(
        <>
            <NavLink style={Styling} to='/'>Home</NavLink>
            <NavLink style={Styling}  to='/about'>About</NavLink>
            <NavLink style={Styling}  to='/product'>Product</NavLink>
        </>
    )
}