import { useAppDispatch } from "../../app/hooks"
import { type AppDispatch, store } from "../../app/store"
import CardList from "../../components/CardList/CardList"
import { useGetFactsQuery } from "../../api/factsApiSlice"
import { useGetImagesQuery } from "../../api/imagesApiSlice"
import { type TCardsData } from "../../hooks/useGetCardsData"
import { DataMerging } from "../../utils/dataMerging"
import { cardsActions } from "../../app/cardsSlice"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const Card = () => {
  const [likeSwitch, setLikeSwitch] = useState(false)
  const dispatch = useAppDispatch<AppDispatch>()

  const facts = useGetFactsQuery(10)
  const images = useGetImagesQuery(9)

  if (facts.isError || images.isError) {
    return (
      <div>
        <h1>Что-то пошло не так :(</h1>
      </div>
    )
  }

  if (facts.isLoading && images.isLoading) {
    return (
      <div>
        <h1>Загружаем информацию про кошек...</h1>
      </div>
    )
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

    if (cards.data.length === 0)
      return (
        <div className="p-10">
          Что то пошло не так и данные не загрузились...{" "}
          <span className="text-xl font-bold text-red-500">:(</span>
        </div>
      )

    dispatch(cardsActions.addCardsData(cards.data))

    const cardsData = store.getState().cardData.data

    return (
      <div className="flex flex-col items-center">
        <div className="flex gap-5">
          <Switch
            checked={likeSwitch}
            onClick={() => setLikeSwitch(!likeSwitch)}
          />
          <span>Показать карточки с лайком</span>
        </div>
        {!likeSwitch ? (
          <CardList data={cardsData} />
        ) : (
          <CardList data={cardsData.filter(card => card.like === true)} />
        )}
      </div>
    )
  }

  return null
}

export default Card
