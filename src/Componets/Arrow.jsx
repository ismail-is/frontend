import React from 'react'

export default function Arrow() {
    const New=()=>{
        let a=10;
        let b=20;
        let c= a+b;
        alert(`10 + 20 = ${c}`)
      
    }
    const Name=(name,age)=>{
      alert(`my name is " '${name}' ", age " '${age}' "` )

    }
  return (
    <div>
     <button onClick={New}>click</button><br/><br/>
     <button onClick={()=>Name(" ismail ",19)} class="btn btn-warning">Just Click</button>
   

    </div>
  )
}
