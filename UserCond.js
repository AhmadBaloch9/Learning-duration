import React,{useEffect,useState } from 'react';


export default function UserCond()
{
   const[data,setData]=useState(10);  
   const[count,setCount]=useState(100);
   useEffect(()=>
   {
    console.log(`Called with data state`);
   },[data])
return(
    <div style={{backgroundColor:`royalblue`,textAlign:`center`,padding:`30px`}}>
        <h1>This is useEffect Conditions:{count}</h1>
        <h1>This is useEffect Conditions:{data}</h1>
          <button onClick={()=>setCount(count+1)}>Update Count</button>
          <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
)
}
