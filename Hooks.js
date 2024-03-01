import React,{useEffect}from 'react';
export default function Hooks()
{
    const[count,setCount]=React.useState(0)
    useEffect(()=>
    {
      console.log("useEffect");
    })
return(
    <div>
        <h1>How are you{count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>Update Counter</button>
    </div>
)
}
