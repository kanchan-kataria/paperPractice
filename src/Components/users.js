import React from 'react'
import { Outlet ,useSearchParams} from 'react-router-dom'
export default function User(){
    const [search , setSearch]=useSearchParams();
    const show=search.get('filter')==='Active'
    return(
        <>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>

            <button onClick={()=>setSearch({filter:'Active',color:'red',price:100})}>Active button</button>
            <button  onClick={()=>setSearch()}>Reset button</button>

            <p>{show?<h1>Active Link</h1>:<h1>Not Active</h1>}</p>

            <Outlet/>
        
        </>
    )
} 