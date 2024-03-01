import React from 'react';

export default function Show()
   
{
  const[hide,setHide]=React.useState(false)
  return(
     <div style={{backgroundColor:`hotpink`,textAlign:`center`,padding:`30px`}}>
       {
        hide?<h1>Hello</h1>:null
       }
     {/* <button onClick={()=>setHide(false)}>Hide</button>
     <button onClick={()=>setHide(true)}>Show</button> */}
     <button onClick={()=>setHide(!hide)}>Toggle</button>
     </div>
  )
}