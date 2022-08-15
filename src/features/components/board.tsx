import { useAppDispatch,useAppSelector } from "../../app/hooks";
import { calWinner, nextMove } from "../slicers/board-slice";
import Square from "./square";

function Board() {
    const boardState = useAppSelector((state) => state.board)
    const dispatch = useAppDispatch()
    const [board,winner] = [boardState.board,boardState.winner]
    function squareClicked(index: number) {
        if (board[index] != null || winner) return
        dispatch(nextMove(index))
        dispatch(calWinner())
    }
    function renderSquare(index: number) {
        return <Square key={index} onClick={()=>squareClicked(index)} value={board[index]} />
    }
    return <div className="grid grid-cols-3 gap-0">
       {board.map((_,index)=>renderSquare(index))}    
   </div> 
}

export default Board