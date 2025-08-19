import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/types/movies_types";


const movieSlice = createSlice({
    name : "movie",
    initialState : initialState,
    reducers : {
        createMovies : (state, action) => {
            const movies = action.payload
            return movies
        },
    }
})

export const { createMovies } = movieSlice.actions
export default movieSlice.reducer