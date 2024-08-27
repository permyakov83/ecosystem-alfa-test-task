import { useAppDispatch } from "../../app/hooks"
import { type AppDispatch, store } from "../../app/store"
import Card from "../../components/Card/Card"
import { useGetFactsQuery } from "./factsApiSlice"
import { useGetImagesQuery } from "./imagesApiSlice"
import { type TCardsData } from "../../hooks/useGetCardsData"
import { DataMerging } from "../../utils/dataMerging"
import { cardsActions } from "./cardsSlice"

const CardList = () => {
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

    dispatch(cardsActions.addCardsData(cards.data))

    const cardsData = store.getState().cardsData.data

    store.subscribe(() => {
      return (
        <>
          {cardsData.length === 0 ? (
            <div className="p-10">
              Что то пошло не так и данные не загрузились...{" "}
              <span className="text-xl font-bold text-red-500">:(</span>
            </div>
          ) : (
            <ul className="flex flex-wrap justify-center gap-6 rounded-lg p-8">
              {cardsData.map(item => (
                <li key={item.id}>
                  <Card
                    id={item.id}
                    imgUrl={item.imgUrl}
                    catsFact={item.catsFact}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )
    })
  }

  return null
}

export default CardList
