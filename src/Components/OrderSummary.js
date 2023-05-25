import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary(){
    const Navigate=useNavigate()
    return(
        <>
            <h1>Order summary</h1>
            <button onClick={()=>Navigate(-1)}>Place Order </button>
        </>
    )
}