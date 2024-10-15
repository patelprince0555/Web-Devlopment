function dosomething(){
    console.log("button was clicked"); 
}

function printbye(){
    console.log("bye!");
}

function Button(){
    return(
        <div>
        <button onClick={dosomething}>Click Me!</button>
        <p onClick={printbye}>This para is for event demo</p>
        </div>
    )
}

export default Button;