import React, { Component } from 'react';

class TestComponent extends Component {

    constructor(){
        super()

        this.state = {
            message: "hello adomas"
        }
    }

    clickedSub = () => {
        if(this.state.message === "hello adomas"){
            this.setState({
                message: "1"
            }); 
        }else{
            this.setState({
                message: "999"
            }); 
        }
    }


    render() {
        return (
            <div>
               <h1>{this.state.message}</h1> 
               <button onClick={this.clickedSub}>Click to subscribe</button>
            </div>
        );
    }
}

export default TestComponent;