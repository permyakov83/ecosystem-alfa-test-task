import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { type AppDispatch } from "../app/store"
import { DataMerging } from "../utils/dataMerging"
import { type CardProps } from "../components/Card/Card"
import { useGetFactsQuery } from "../api/factsApiSlice"
import { useGetImagesQuery } from "../api/imagesApiSlice"
import { cardsActions } from "@/app/cardsSlice"

export type TCardsData = {
  data: CardProps[]
}

const useGetCardsData = () => {
  const dispatch = useAppDispatch<AppDispatch>()

  const facts = useGetFactsQuery(9)
  const images = useGetImagesQuery(9)

  const loadStatus = {
    isError: facts.isError && images.isError,
    isLoading: facts.isLoading && images.isLoading,
    isSuccess: facts.isSuccess && images.isSuccess,
  }

  if (
    facts.isSuccess &&
    images.isSuccess &&
    facts.data !== undefined &&
    images.data !== undefined
  ) {
    const cards: TCardsData = {
      data: DataMerging({
        facts: facts.data,
        images: images.data,
      }),
    }
    dispatch(cardsActions.addCardsData(cards.data))
  }
  return { ...loadStatus }
}

export default useGetCardsData
