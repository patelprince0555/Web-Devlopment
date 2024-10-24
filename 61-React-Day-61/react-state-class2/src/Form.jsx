import { useState } from "react";
export default function Form(){
    let[fullName ,setFullName]=useState("prince");

    let handleNameChange=(event)=>{
        setFullName(event.target.value);
    }
    return(
        <div>
            <input placeholder="Enter your name" 
            type="text"
             value={fullName}
              onChange={handleNameChange}/>
            <button>Submit</button>
        </div>
    )
}