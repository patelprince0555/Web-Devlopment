import { useState } from "react";
export default function Form(){
    let[fullName ,setFullName]=useState("prince");

    let handleNameChange=(event)=>{
        setFullName(event.target.value);
    }
    return(
        <div>
            <label htmlFor="username">FullName</label>
            <input placeholder="Enter your name" 
            type="text"
             value={fullName}
              onChange={handleNameChange}
              id="username"/>
            <button>Submit</button>
        </div>
    )
}