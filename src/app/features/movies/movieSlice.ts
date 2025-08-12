import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Movies = Array<{
    id : number | null,
    score : number | null,
    metadata : any,
}>

const initialState : Movies = [{
    id : null,
    score : null,
    metadata : [{}]
}]

const movieSlice = createSlice({
    name : "movie",
    initialState : initialState,
    reducers : {
        createMovies : (state, action : PayloadAction<Array<Object>>) => {
            state = action.payload
        }
    }
})

export const {createMovies} = movieSlice.actions
export default movieSlice.reducer