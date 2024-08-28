import { type TCardsData } from "@/components/CardList/CardList"
import { type CardProps } from "../components/Card/Card"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type LikeState = {
  id: string
  likeState: boolean
}

const initialState: TCardsData = {
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
    likeToggle: (state, actions: PayloadAction<LikeState>) => {
      const card = state.data.find(item => item.id === actions.payload.id)
      if (card !== undefined) card.like = actions.payload.likeState
    },
  },
})

export default cardsSlice.reducer
export const cardsActions = cardsSlice.actions
