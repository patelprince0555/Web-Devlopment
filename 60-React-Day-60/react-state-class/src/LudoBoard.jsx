import { useState } from "react"
export default function LudoBoard(){
    let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});

    let updateBlue=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,blue:prevMoves.blue+1};
        });
    };
    let updateRed=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,red:prevMoves.red+1};
        });
    };
    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,yellow:prevMoves.yellow+1};
        });
    };
    let updateGreen=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,green:prevMoves.green+1};
        });
    };
    return(
        <div>
            <p>Game Begains!</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{background:"blue"}} onClick={updateBlue}>+1</button>
                <p>Blue moves={moves.red}</p>
                <button style={{background:"red"}} onClick={updateRed}>+1</button>
                <p>Blue moves={moves.yellow}</p>
                <button style={{background:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Blue moves={moves.green}</p>
                <button style={{background:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}