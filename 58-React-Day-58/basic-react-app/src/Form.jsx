

function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write something"/>
            <button>submit</button>
        </form>
    )
}
export default Form;