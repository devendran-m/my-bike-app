import React, {Component} from "react";

export default class MyList extends Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this); //Binding to component context
    }

    onClick(id){
        const {name} = this.props.items.find(i => i.id===id);
        console.log('Clicked', `${name}`);
    }

    render(){
        return (
        <ul>
            {/*Creates a new handler function with bound "id" argument. Notice that the context is left as null as it is already bound in the constructor */}
            {this.props.items.map(({id,name}) => (
                <li key={id} onClick={this.onClick.bind(null, id)}>{name}</li>
            ))} 
        </ul>
        )
    }
}
