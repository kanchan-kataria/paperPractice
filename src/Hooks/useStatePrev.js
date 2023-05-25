import React , {useState} from 'react'

export default function UseStatePrev(){
    const [state,setState]=useState(0)

    function stateHandler(){
        for(let i=0;i<5;i++){
            setState(prev=>prev+1)
        }
       
    }
    return(
        <>
            <button onClick={()=>setState(prev=>prev+1)}>Increment</button>
            <button onClick={()=>setState(prev=>prev-1)}>Decrement</button>
            <button onClick={()=>setState(0)}>Reset</button>
            <button onClick={stateHandler}>Increment 5 </button>
            <p>{state}</p>
        
        </>


    )
}