import {configureStore } from '@reduxjs/toolkit'
import boardReducer from '../features/slicers/board-slice'

const store = configureStore({
    reducer: {
        board:boardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store