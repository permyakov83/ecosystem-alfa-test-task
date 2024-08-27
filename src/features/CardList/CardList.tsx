import { store } from "../../app/store"
import Card from "../../components/Card/Card"
import useGetCardsData from "../../hooks/useGetCardsData"

const CardList = () => {
  const cardData = useGetCardsData()

  if (cardData.isError) {
    return (
      <div>
        <h1>Что-то пошло не так :(</h1>
      </div>
    )
  }

  if (cardData.isLoading) {
    console.log("Загружаем информацию про кошек...")
    return (
      <div>
        <h1>Загружаем информацию про кошек...</h1>
      </div>
    )
  }

  if (cardData.isSuccess) {
    console.log("Загрузили информацию про кошек...")
    const cards = store.getState().cardsData.data
    return (
      <>
        {cards.length === 0 ? (
          <div className="p-10">
            Что то пошло не так и данные не загрузились...{" "}
            <span className="text-xl font-bold text-red-500">:(</span>
          </div>
        ) : (
          <ul className="flex flex-wrap justify-center gap-6 rounded-lg p-8">
            {cards.map(item => (
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
  }

  return null
}

export default CardList
