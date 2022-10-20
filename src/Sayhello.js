import React from "react"

class Sayhello extends React.Component{
    constructor(props){
        super(props);

        this.props = props;
    }

    render(){
        return <button onClick={() => this.props.sayHelloProp()}>Click me</button>
    }

}

export default Sayhello