import Card, { type CardProps } from "../Card/Card"

export type TCardsData = {
  data: CardProps[]
}

const CardList = (cardsData: TCardsData) => {
  return (
    <ul className="flex flex-wrap justify-center gap-6 rounded-lg p-8">
      {cardsData.data.map(item => (
        <li key={item.id}>
          <Card id={item.id} imgUrl={item.imgUrl} catsFact={item.catsFact} />
        </li>
      ))}
    </ul>
  )
}

export default CardList
