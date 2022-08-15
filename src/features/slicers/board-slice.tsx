import { PayloadAction,createSlice} from '@reduxjs/toolkit'

interface BoardState {
    playerNames: (string | null)[]
    xIsNext: boolean,
    winner: string | null,
    board: (string | null)[]

}

const initialState: BoardState = {
    playerNames: Array(2).fill(null),
    xIsNext: true,
    winner: null,
    board: Array(9).fill(null)
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        'setPlayersName': (state: BoardState, action: PayloadAction<string[]>) => {
            state.playerNames = action.payload
        },
        'nextMove': (state: BoardState, action:PayloadAction<number>) => {
            if (state.xIsNext) {
                state.board[action.payload] = 'X'
            }
            else {
                state.board[action.payload] = 'O'
            }
            state.xIsNext = !state.xIsNext
        },
        'calWinner': (state: BoardState) => {
            const condition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
            for (let i = 0; i < condition.length; i++){
                const [a, b, c] = condition[i]
                if (state.board[a] != null && state.board[a] == state.board[b] && state.board[a] == state.board[c]) {
                    state.winner = state.board[a]=='X'?state.playerNames[0]:state.playerNames[1]
                }
            }
        }
    }
})

export const { setPlayersName, nextMove, calWinner } = boardSlice.actions
export default boardSlice.reducer