import React, { Component } from 'react';
class Construster extends React.Component{
    constructor()

    {
        super()
       this.state={
        data:"Ahmad"
       }
    }
render()
{
    console.log("render");
return(
<div style={{backgroundColor:`Window`,textAlign:`center`,padding:`30px`}}>
    <h1>How are you{this.state.data}</h1>
    
</div>
)
}
}
export default Construster;
