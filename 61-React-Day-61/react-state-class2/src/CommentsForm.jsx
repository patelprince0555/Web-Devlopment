export default function CommentForm(){
    return(
        <div>
            <h4>give a comment</h4>
            <form>
                <input placeholder="username" type="text"/>
                <br></br><br></br>
                <textarea>Remarks</textarea>
                <br></br><br></br>
                <input placeholder="rating" type="number" min={1} max={5}/>
                <br></br><br></br>
                <button>Add a comment!</button>
            </form>
        </div>
    )
}