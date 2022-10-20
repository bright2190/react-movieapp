import React from "react"

class Signout extends React.Component{
    
    constructor(props){
        super(props)

        this.props = props
    }

    render(){

        return (
            <div>
                <button onClick={() => this.props.logoutUserProp()}>Click to Sign out</button>
            </div>
        )

    }


}

export default Signout