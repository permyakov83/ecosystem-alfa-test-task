import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type CardProps } from "../../components/Card/Card"

export type CardsState = {
  data: CardProps[]
}

const initialState: CardsState = {
  data: [],
}

export const cardsSlice = createSlice({
  name: "cardsData",
  initialState,
  reducers: {
    addCardsData: (state, actions: PayloadAction<CardProps[]>) => {
      state.data = actions.payload
    },
    cardRemove: (state, actions: PayloadAction<string>) => {
      const index = state.data.findIndex(item => item.id === actions.payload)
      if (index !== undefined) {
        state.data.splice(index, 1)
      }
    },
  },
})

export default cardsSlice.reducer
export const cardsActions = cardsSlice.actions
