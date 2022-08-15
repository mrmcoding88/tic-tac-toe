import { useAppDispatch } from "../../app/hooks"
import { setPlayersName } from "../slicers/board-slice"


function Start() {
    const dispatch = useAppDispatch()
    function startGameClicked() {
        const p1 = document.getElementById('p1') as HTMLInputElement
        const p2 = document.getElementById('p2') as HTMLInputElement
        dispatch(setPlayersName([p1.value as string, p2.value as string]))
    }
    return <div className="p-5">
        <label htmlFor="Player 1">Player 1: </label>
        <input type="text" id='p1' />
        <label htmlFor="Player 2">Player 2: </label>
        <input type="text" id='p2' />
        <button className='rounded-lg border-red-700 p-2 bg-slate-400' type='submit' onClick={() => startGameClicked()}>Start Game</button>
    </div>
}

export default Start