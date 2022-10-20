import React from "react";

class Buttons extends React.Component{
    constructor(props){
        super()
        this.props = props;
    }


    render(){

        return (
            <div>
                <button onClick={() => this.props.increaseProp(1)}>Add</button>
                <button onClick={() => this.props.decreaseProp()}>Subtract</button>
            </div>
        )

    }



}

export default Buttons