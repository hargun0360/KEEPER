import React from "react"; 
import Heading from "./heading";
import Footer from './footer';
import Note from './note';
import notes from './notes'


function App(){
    return(
        <div>
             <Heading />
             {notes.map(e => (                 
                <Note 
                    key={e.id}
                    title={e.title}
                    discription={e.content}
                />
             ))}
             
             <Footer />
        </div>
        
    );
        
    
} 

export default App;

 