import React , {useState} from 'react'

export default function UseStateOne(){
    const [state,setState]=useState(0)

    function stateHandler(){
        setState(prev=>prev+1)
    }
    return(
        <>
            <button onClick={stateHandler}>Count {state}</button>
        
        </>


    )
}