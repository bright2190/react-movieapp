import React from "react"

class Signin extends React.Component{
    
    constructor(props){
        super(props)

        this.props = props
    }

    render(){

        return (
            <div>
                <button onClick={() => this.props.loginUserProp()}>Click to Sign in</button>
            </div>
        )

    }


}

export default Signin