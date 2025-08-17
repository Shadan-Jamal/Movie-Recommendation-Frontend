import { createSlice } from "@reduxjs/toolkit";


type Movies = {
    id : number | null,
    score : number | null,
    metadata : Object,
}[]

const initialState : Movies = [{
    id : null,
    score : null,
    metadata : {}
}]

const movieSlice = createSlice({
    name : "movie",
    initialState : initialState,
    reducers : {
        createMovies : (state, action) => {
            const obj = action.payload
            return obj
        }
    }
})

export const {createMovies} = movieSlice.actions
export default movieSlice.reducer