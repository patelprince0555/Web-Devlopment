function handleClick(){
    console.log("button was clicked"); 
}

function handleOverMouse(){
    console.log("bye!");
}

function handleDbclick(){
    console.log("you double clicked!");
}

function Button(){
    return(
        <div>
        <button onClick={handleClick}>Click Me!</button>
        <p onMouseOver={handleOverMouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis illum explicabo voluptate exercitationem et in accusamus! Quo natus voluptates fugiat voluptatem? Quae sapiente ad optio dicta? Dolorem, eum laborum?</p>
        <button onDoubleClick={handleDbclick}>double click me!</button>
        </div>
    )
}

export default Button;