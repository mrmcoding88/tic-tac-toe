import { useAppSelector, useAppDispatch } from './app/hooks'
import Board from './features/components/board'
import Start from './features/components/start'
import { setPlayersName } from './features/slicers/board-slice'
function App() {
  const boardState = useAppSelector((state) => state.board)
  const [xIsNext, winner, playerNames] = [boardState.xIsNext, boardState.winner, boardState.playerNames]


  const status = winner ? 'Winner is: ' + winner : xIsNext ? 'Next Player: ' + playerNames[0] : 'Next Player: ' + playerNames[1]

  const showBoard: boolean = playerNames.every((name) => name != null)
  return (
    <div>
      {!showBoard ? <Start /> : <div className='flex flex-row m-5'>
        <Board />
        <div className='text-xl text-red-700 ml-5'>
          {status}
        </div>
      </div>}
    </div>

  )
}

export default App
