import {useAppSelector} from './app/hooks'
import Board from './features/components/board'
function App() {
 const boardState = useAppSelector((state)=>state.board)
  const [xIsNext, winner] = [boardState.xIsNext, boardState.winner]
  
  const status = winner?'Winner is: ' + winner: xIsNext?'Next Player: x':'Next Player: Y'

  return (
    <div className='flex flex-row m-5'>
      <Board />
      <div className='text-xl text-red-700 ml-5'>
        {status}
      </div>
    </div>
 
  )
}

export default App
