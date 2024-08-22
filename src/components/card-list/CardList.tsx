import { Card, type CardProps } from "../card/Card"

type CardListProps = CardProps[]

export const CardList = (cards: CardListProps) => {
  return (
    <ul className="">
      {cards.map(card => (
        <li key={card.id}>
          <Card imgUrl={card.imgUrl} catsFact={card.catsFact} />
        </li>
      ))}
    </ul>
  )
}
