import { useState } from "react"; 
export default function LikeButton(){

    let[isLiked,setIsLiked]=useState(false);
    let[clicks,setClicks]=useState(0);

    let toggleLike=()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);

    };

    let LikeStyle ={color:"red"};
    return(
        <div>
            <p>clicks={clicks}</p>
            <p onClick={toggleLike}>{isLiked ?(
                <i className="fa-solid fa-heart" style={LikeStyle}></i>):(
                <i className="fa-regular fa-heart"></i>)}
                </p>
        </div>
    );
}