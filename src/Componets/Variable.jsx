import React from 'react'

export default function Variable() {
    var a=10;
    let b =20;
    const c =30;
    a= 20;
    b=30;
    let name="ismail";
    if(true){
        let name="soory"
        console.log(name,"jeevan")
    }
console.log(name,"jeevan")

  return (

    <div>
       {a}<br/>
       {b}<br/>
       {c}<br/>
       
    </div>
  )
}
