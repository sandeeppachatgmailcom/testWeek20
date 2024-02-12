import React from "react";
class FirstChild extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1 className="text-light" >FirstChild</h1>
                
            </div>
        )
    }
}

export default FirstChild;