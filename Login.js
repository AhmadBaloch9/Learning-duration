import React from 'react';
export default function Login()
{
  const[user,userId]=React.useState("");
  const[pass,passId]=React.useState("");
  const[usrErr,setErr]=React.useState(false);
  const[pasErr,setPass]=React.useState(false);
  function formHandler(e){
    e.preventDefault();
    if(user.length<5||pass.length<5){
      alert(`Please write full digit`)
    }
    else{
      alert(`All Good`)
    }
  }
  function userHandler(val){
   const item=val.target.value;
   if(item.length<5){
      setErr(true)
   }
   else{
    setErr(false)
   }
   userId(item)
  }
   function passHandler(val){
    const item=val.target.value;
    if(item.length<5){
      setPass(true)
    }
    else{
      setPass(false)
    }
    passId(item)
  }
  return(
    <div style={{backgroundColor:`gainsboro`,textAlign:`center`,padding:`30px`}}>
      <h1>This is input form</h1>
      <br></br><br></br>
      <form action="" onSubmit={formHandler}>
        <input type="text"  placeholder='Enter Text' onChange={userHandler}/>
         {usrErr?<span>Name not valid</span>:""}
        <br></br><br></br>
        <input type="password" placeholder='Enter Password' onChange={passHandler}/>
        {pasErr?<span>Password not valid</span>:""}
         <br></br><br></br>
         <button>Submit</button>
      </form>
    </div>
  )
}
