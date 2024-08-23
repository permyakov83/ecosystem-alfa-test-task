import Card, { type CardProps } from "../Card/Card"

export type CardListProps = {
  data: {
    id: string
    cards: CardProps
  }[]
}

const CardList = ({ data }: CardListProps) => {
  return (
    <>
      {data.length === 0 ? (
        <div className="p-10">
          Что то пошло не так и данные не загрузились...{" "}
          <span className="text-xl font-bold text-red-500">:(</span>
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center gap-6 rounded-lg p-8">
          {data.map(item => (
            <li key={item.id}>
              <Card imgUrl={item.cards.imgUrl} catsFact={item.cards.catsFact} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CardList
