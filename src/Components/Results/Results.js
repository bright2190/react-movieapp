import React from "react";

class Results extends React.Component{

    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return (
            <span>{this.props.newCounterProp}</span>
        )
    }


}

export default Results