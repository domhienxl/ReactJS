import React from 'react';

class Xe extends React.Component{
    constructor(props){
        console.log('Xe constructor: ',props);
        super(props);
        this.state = {
            color: props.color,
            value: props.value
        };
        console.log('this inner constructor:',this);
        // this.shoot = this.shoot.bind(this);
    }

    shoot(b){
        // alert('Great Shot!');
        console.log('shoot this = ', this);
        console.log('shoot b = ', b);
    }
    shoot2 = (a) =>{
        // console.log('shoot2 this = ', this);
        console.log('shoot2 a = ', a);
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps');
    //     return {color: props.color};
    // }
shoot3 = (a,b) => {
    alert(b.type);
}
    render(){
        const shoot = (

            <h1 
            onClick={this.shoot.bind(this,'Goal shoot 1')} 
            style={{ color:this.state.color, cursor:'pointer'}}>Hello, {this.state.value}
            </h1>
            );
            const shoot2 = (

                <h1 
                onClick={() => this.shoot2('Goal')} 
                style={{ color:this.state.color, cursor:'pointer'}}>Hello, {this.state.value}
                </h1>
                );
                const shoot3 = (

                    <h1 
                    onClick={(ev) => this.shoot3("Goal", ev)} 
                    style={{ color:this.state.color, cursor:'pointer'}}>Hello, {this.state.value}
                    </h1>
                    );
        return shoot3;
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