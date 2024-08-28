/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { type AppDispatch } from "../app/store"
import { DataMerging } from "../utils/dataMerging"
import { type CardProps } from "../components/Card/Card"
import { cardsActions } from "../features/Cards/cardsSlice"
import { useGetFactsQuery } from "../features/Cards/factsApiSlice"
import { useGetImagesQuery } from "../features/Cards/imagesApiSlice"

export type TCardsData = {
  data: CardProps[]
}

const useGetCardsData = () => {
  const dispatch = useAppDispatch<AppDispatch>()

  const facts = useGetFactsQuery(9)
  const images = useGetImagesQuery(9)

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (facts.isError || images.isError) {
      setIsError(true)
    }

    if (facts.isLoading && images.isLoading) {
      setIsLoading(true)
      console.log("загружаю")
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

      setIsSuccess(true)
      console.log("загрузил")
    }
  }, [facts.isLoading, facts.isSuccess])

  return { isError, isLoading, isSuccess }
}

export default useGetCardsData
