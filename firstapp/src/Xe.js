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

    // static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps');
    //     return {color: props.color};
    // }

    render(){
        return (
        <h1 style={{ color:this.state.color}}>Hello, {this.state.value}</h1>
        );
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({color: 'yellow'});
            this.setState({value:'Toi doi thanh xe mau vang'});
            console.log('componentDidMount da thay doi thanh mau vang');
        }, 1000);
    }
}

export default Xe;