import React from "react"

class PageNotFound extends React.Component{
    constructor(props){
        super(props)

        this.props = props;
        this.props.showNavProp();

    }

   


    render(){
        return (
            <div>Page Not Found</div>
        )
    }


}

export default PageNotFound