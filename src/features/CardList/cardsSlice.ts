import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type CardProps } from "../../components/Card/Card"

export type CardsState = CardProps[]

const initialState: CardsState = []

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards: (state, actions: PayloadAction<CardsState>) => {
      state = actions.payload
    },
  },
})

export default cardsSlice.reducer
export const cardsActions = cardsSlice.actions
