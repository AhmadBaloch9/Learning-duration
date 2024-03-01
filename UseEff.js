import React,{useEffect,useState} from 'react';
export default function UseEff()
{
    const[count,setCount]=useState(10)
    const[data,setData]=useState(100)
    useEffect(()=>{
        console.log("Called with data update");
    },[data])
    useEffect(()=>{
        alert("Called with Count update"+count);
    },[count])
    return(
        <div style={{backgroundColor:`darkcyan`,textAlign:`center`,padding:`30px`}}>
            <h1>This is Use Effect Count:{count}</h1>
            <h1>This is Use Effect Data:{data}</h1>
            <button onClick={()=>setCount(count+1)}>Count Increase</button>
            <button onClick={()=>setData(data+1)}>Data Increase</button>
        </div>
    )
}
