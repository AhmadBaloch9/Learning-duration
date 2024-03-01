import React from 'react';


class DidMount extends React.Component{
    constructor(){
        super();
       this.state={
       name:`Ahmad`,
       }
    }
    componentDidMount(){
        console.log("DidMount");
    }
    render(){
        console.log("Render");
     return(
       
          <div style={{backgroundColor:`firebrick`,textAlign:`center`,padding:`30px`}}>
            <h1>How are you{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Shahzad"})}>Update</button>
          </div>
     )
}
}
export default DidMount;