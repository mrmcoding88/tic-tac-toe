import {useAppSelector,useAppDispatch} from './app/hooks'
import Board from './features/components/board'
import { setPlayersName } from './features/slicers/board-slice'
function App() {
 const boardState = useAppSelector((state)=>state.board)
  const [xIsNext, winner, playerNames] = [boardState.xIsNext, boardState.winner, boardState.playerNames]
  const dispatch = useAppDispatch()
  
  const status = winner ? 'Winner is: ' + winner : xIsNext ? 'Next Player: ' +playerNames[0] : 'Next Player: '+playerNames[1]
  function startGameClicked() {
    const p1 = document.getElementById('p1')as HTMLInputElement
    const p2 = document.getElementById('p2') as HTMLInputElement
    dispatch(setPlayersName([p1.value as string,p2.value as string]))
  }

  return (
    <div>
       <label htmlFor="Player 1">Player 1: </label>
        <input type="text" id='p1'/>
        <label htmlFor="Player 2">Player 2: </label>
        <input type="text" id= 'p2'/>
        <button className='rounded-lg border-red-700 p-2 bg-slate-400' type='submit' onClick={()=>startGameClicked() }>Start Game</button>
    <div className='flex flex-row m-5'>
      <Board />
      <div className='text-xl text-red-700 ml-5'>
        {status}
      </div>
      </div>
      </div>
 
  )
}

export default App
