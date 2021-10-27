import React from "react";
import "./app.css"

let stylee={
    color:"whitesmoke",
    fontFamily:"cursive"
}



function Heading(){
    return (
        <header className="head">
            <h1 className= "one"style={stylee}>KEEPER</h1>
        </header>
        
    );
}

export default Heading;