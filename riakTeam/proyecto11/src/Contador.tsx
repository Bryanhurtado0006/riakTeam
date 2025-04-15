import React, { useEffect } from "react"
import { useState } from "react";







const Count:React.FC=()=>{
    const[Count,setCount]= useState<number>(0);
    useEffect(()=>{
        console.log(Count);
    },[Count]);
    return(
        <div>
            <p> numero de clicks {Count} veces </p>
            <button onClick={()=>setCount(Count+1)}> MERA DIMELO BABY LOS DIAAAAAAAAAAAABLO puñetaaaa</button>
        </div>
    )
}

export default Count;