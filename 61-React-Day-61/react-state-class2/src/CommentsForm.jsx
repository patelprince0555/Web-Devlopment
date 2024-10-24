import { useState } from "react"
export default function CommentForm(){
    let [formData, setformData]=useState({
        username:"",
        remarks:"",
        rating:"",
    });

    let handleInputChange=(event)=>{
        setformData((currData)=>{
            return{...currData,[event.target.name]: event.target.value};
        });
    };

    let handlesubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
        setformData({
            username:"",
            remarks:"",
            rating:"",
        })
    }
    return(
        <div>
            <h4>give a comment</h4>
            <form onSubmit={handlesubmit}>
                <label htmlFor="username">username</label>
                <input placeholder="username" 
                 type="text"
                  value={formData.username}
                  onChange={handleInputChange} id="username"
                  name="username"/>
                <br></br><br></br>

                <label htmlFor="remarks">remarks</label>
                <textarea placeholder="add a remarks" 
                value={formData.remarks}
                onChange={handleInputChange} id="remarks"
                name="remarks"></textarea>
                <br></br><br></br>

                <label htmlFor="rating">rating</label>
                <input placeholder="rating"
                 type="number" min={1} max={5} 
                 value={formData.rating}
                 onChange={handleInputChange} id="rating" name="rating"/>
                <br></br><br></br>

                <button>Add a comment!</button>
            </form>
        </div>
    )
}