import React from 'react'

export default function Greeting(props){
    const {name,children}=props;
    return(
        <h1>{children[1]} , {name}</h1>
    )
}