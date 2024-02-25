import React from "react";

class Number extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render(){
        
        if(this.props.number % 2 === 0){
            return(
                <div>
                {console.log("Even Number")}
                </div>
            )
            
        }
        else {
            return(
                <div>
                {console.log("Odd Number")}
                </div>
            )
        }            
}
}

export default Number;