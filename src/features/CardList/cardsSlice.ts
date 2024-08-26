import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
// import { type CardProps } from "src/components/Card/Card"

const initialState: string[] = []

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards: (state, actions: PayloadAction<string[]>) => {
      state = actions.payload
    },
  },
})

export default cardsSlice.reducer
export const cardsActions = cardsSlice.actions
