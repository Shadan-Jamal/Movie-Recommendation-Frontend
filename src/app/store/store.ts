import { configureStore } from '@reduxjs/toolkit'
import inputSlice from '../features/inputs/inputSlice'
import movieSlice from "../features/movies/movieSlice"

export const store = configureStore({
  reducer: {
    input : inputSlice,
    movies : movieSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch