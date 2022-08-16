import { useAppDispatch } from "../../app/hooks"
import { setPlayersName } from "../slicers/board-slice"


function Start() {
    const dispatch = useAppDispatch()

    function startGameClicked() {
        const p1 = document.getElementById('p1') as HTMLInputElement
        const p2 = document.getElementById('p2') as HTMLInputElement
        if (p1.value.length == 0 || p2.value.length == 0) {
            if (p1.value.length == 0) {
                p1.classList.remove('ring-slate-500')
                p1.classList.add('ring-red-500')
            }
            if (p2.value.length == 0) {
                p2.classList.remove('ring-slate-500')
                p2.classList.add('ring-red-500')
            }

        }
        else {
            dispatch(setPlayersName([p1.value as string, p2.value as string]))
        }
    }
    return <div className="flex item-center space-x-2 p-5">
        <label htmlFor="Player 1">Player 1: </label>
        <input className="ring ring-offset-0 ring-slate-500 pl-2" type="text" id='p1' />
        <label htmlFor="Player 2">Player 2: </label>
        <input className="ring ring-offset-0 ring-slate-500 pl-2" type="text" id='p2' />
        <button className='rounded-lg p-1 bg-slate-400' type='submit' onClick={() => startGameClicked()}>Start Game</button>
    </div>
}

export default Start