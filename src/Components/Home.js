import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const Navigate = useNavigate();
    return(
        <>
            <h1>Home Page</h1>

            <button onClick={()=>Navigate('order-summary',{replace:true})}>Place Order </button>
        </>
    )
}