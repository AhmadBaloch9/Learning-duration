import React from 'react';
export default function User(){
    const[user,updateUser]=React.useState(0)
   function update(){
    updateUser(user+1);
   }
      return(
      <div style={{backgroundColor:`orangered`,textAlign:`center`,padding:`30px`}}>
        <h1>Hello I am Toggle{user}</h1>
        <br></br><br></br>
        <button onClick={update}>Update</button>
      </div>
      )
}
