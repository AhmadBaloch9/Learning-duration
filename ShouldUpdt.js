import React from 'react';


class ShouldUpdt extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
    }
    shouldComponentUpdate(){
        console.log("Should Component Update",this.state.count);
        if(this.state.count<5 ||this.state.count<10){
            return true
        }
       
    }
    render(){
        return(
            <div style={{backgroundColor:`darkgoldenrod`,textAlign:`center`,padding:`30px`}}>
                <h1>Should Component Update{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
            </div>
        )
    }
}

export default ShouldUpdt;