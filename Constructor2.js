import React from 'react';


class Constructor2 extends React.Component{
    constructor(){
        super();
        this.state={
            email:"ahmad@gmail.com"
        }
    }
render()
{
   
    return(
        <div>
            <h1>Hello I am Rander<br></br> {this.state.email}</h1>
            <button onClick={()=>this.setState({email:"shahz"})}>Update Email</button> 
        </div>
    )
}
}
export default Constructor2;