import React from 'react';


function Note(props) {
    return <div className="note-block">
        <h3 className="heading3">{props.title}</h3>
        <p className="para2">
            {props.discription}
        </p>
    </div>
}


export default Note;