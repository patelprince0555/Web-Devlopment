import { useState } from "react";
export default function Form(){
    let[formData,setFormData]=useState({
        fullName:"",
        Username:""
    })

    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value);
    // }

    // let handleUserName=(event)=>{
    //     setUserName(event.target.value);
    // }

    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;

        setFormData((currData)=>{
            currData[fieldName]=newValue;
            return{...currData};
        })
    };

    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            Username:"",
        });
    };
    return(
        <div onSubmit={handleSubmit}>
            <label htmlFor="fullName">FullName</label>
            <input placeholder="Enter your name" 
            type="text"
             value={formData.fullName}
              id="fullName"
              name="fullName"
              onChange={handleInputChange}/>
              <br></br>
              <br></br>

            <label htmlFor="UserName">userName</label>
            <input placeholder="Enter your name" 
            type="text"
             value={formData.Username}
              id="UserName"
              name="Username"
              onChange={handleInputChange}/>
              <br></br>
              <br></br>
            <button>Submit</button>
        </div>
    )
}