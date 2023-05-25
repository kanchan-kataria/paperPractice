import React from 'react'
import { useParams } from 'react-router-dom'
import User from './users'
export default function UserDetail(){
    const params=useParams();
   
    return(
        <>
            <h1>User Details {params.Id} </h1>
            
            
        
        </>
    )
}