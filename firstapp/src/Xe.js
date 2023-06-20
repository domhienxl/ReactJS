import React from 'react';

class Xe extends React.Component{
    constructor(props){
        console.log('Xe constructor: ',props);
        super(props);
        this.state = {
            color: props.color,
            value: props.value
        };
    }

    render(){
        return <h1 style={{ color:this.state.color}}>Hi, {this.state.value}</h1>
    }
}

export default Xe;