import React, { useState } from 'react';

export default function Form() {
    const [name, newName] = useState("");
    const [tac, newtac] = useState(false);
    const [interest, newintrest] = useState("")
    function print(e) {
        console.log(name,tac,interest);
        e.preventDefault()
       
    }
    return (
        <div style={{ backgroundColor: `blueviolet`, textAlign: `center`, padding: `30px` }}>
            <h1>Form In React</h1>
            <form action="" onSubmit={print}>
                <input type="text" placeholder='Enter Your Name' onChange={(e) => newName(e.target.value)} /><br></br><br></br>
                <select name="" id="" onChange={(e)=>newintrest(e.target.value)}>
                    <option value="">Iphone</option>
                    <option value="">Samsung</option>
                    <option value="">Redmi</option>
                </select>
                <br></br><br></br>
                <input type="checkbox" name="" id="" onChange={(e)=>newtac(e.target.value)}/>
                <br></br><br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}