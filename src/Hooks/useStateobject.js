import React , {useState} from 'react'
import { useSearchParams } from 'react-router-dom'

export default function UseStateObject(){
    const [state,setState]=useState({firstName:'',LastName:''})
  
  
    return(
        <>
           
           <input type='text' value={state.firstName}  onChange={e=>setState({...state , firstName:e.target.value})}/>
           <input type='text' value={state.LastName}  />
        
        </>


    )
}