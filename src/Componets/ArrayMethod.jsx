import React from 'react'

export default function ArrayMethod() {
    let Array=["ismail ", "jeevan ", "soory ", "apple ", "banana "]
    let obj=[{
        name:"ismail",
        age :19,
        address:"bantwal"
    }]
  return (
    <div>
       
         <h1 >...........Array method...........</h1>
        <h4>{Array}</h4>
       {Array.map((ok)=>{
         return <h1 >{ok}</h1>
       })}
       <hr color='green'></hr>
       <h1>OBJ</h1>
       {obj.map((hey)=>{
        return(
            <>
             <h1>name :- {hey.name} </h1>
             <h1>age:- {hey.age}</h1>
             <h1>address:- {hey.address}</h1>
            </>
           
        )
        
       })}
    </div>
  )
}
