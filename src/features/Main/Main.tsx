import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { type AppDispatch, type RootState, store } from "../../app/store"
import CardList from "../../components/CardList/CardList"
import { useGetFactsQuery } from "../../api/factsApiSlice"
import { useGetImagesQuery } from "../../api/imagesApiSlice"
import useGetCardsData, { type TCardsData } from "../../hooks/useGetCardsData"
import { DataMerging } from "../../utils/dataMerging"
import { cardsActions } from "../../app/cardsSlice"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const Main = () => {
  const cardsData = useAppSelector((state: RootState) => state.cardData)

  const { isError, isLoading, isSuccess } = useGetCardsData()
  console.log({ isError, isLoading, isSuccess })

  if (isError) {
    return (
      <div>
        <h1>Что-то пошло не так :(</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Загружаем информацию про кошек...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return <CardList data={cardsData.data} />
  }
}

export default Main
