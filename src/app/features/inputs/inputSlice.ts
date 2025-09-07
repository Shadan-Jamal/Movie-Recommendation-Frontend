import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InputType = {
    text : string,
    textType : string
}

const initialState : InputType = {
    text : "",
    textType : ""
}

export const inputSlice = createSlice({
    name : "input",
    initialState : initialState,
    reducers : {
        changeText : (state, action: PayloadAction<string>) => {
            state.text = action.payload
            },
        changeTextType : (state, action: PayloadAction<string>) => {
            state.textType = action.payload
            }
        },
    },
)

export const {changeText, changeTextType} = inputSlice.actions
export default inputSlice.reducer
