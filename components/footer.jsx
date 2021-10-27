import React from "react";

const year = new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <p className="para">Copyright @ {year}</p>
        </footer>
        
    );
}

export default Footer;