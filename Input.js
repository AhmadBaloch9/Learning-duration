import React from 'react';

export default function Input()

{
   const[name,setName]=React.useState("");
   const[print,setPrint]=React.useState(false)
   function getData(val){
     setName(val.target.value);
   }
    return(
      <div style={{backgroundColor:`forestgreen`,textAlign:`center`,padding:`30px`}}>
       {
          print?<h1>{name}</h1>:null
       }
        <br></br>
        <input type="text" placeholder='Enter Text' onChange={getData}/>
        <br></br><br></br>
        <button onClick={()=>setPrint(true)}>Print</button>
      </div>
    )
}