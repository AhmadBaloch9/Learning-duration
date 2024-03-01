import React from 'react'
 class DidUpdate extends React.Component{
    constructor(){
        super();
        console.log(`Constructor`);
        this.state={
            count:0,
        }
    }
    componentDidUpdate(prevsProps,preState,snapsShot){
console.log(`Component Did Update`,preState);
    }
    render(){
             console.log(`Render`)
        return(
            <div style={{backgroundColor:`rosybrown`,textAlign:`center`,padding:`30px`}}>
                <h1>Hello I am Did Update{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
            </div>
        )
    }
 }
 export default DidUpdate;