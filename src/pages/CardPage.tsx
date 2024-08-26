import { type CardProps } from "../components/Card/Card"
import { facts, images } from "../moks"
import { DataMerging } from "../utils/dataMerging"
import { Link, useParams } from "react-router-dom"

const CardPage = () => {
  const data = DataMerging({ facts, images })
  const { id } = useParams()

  function isId(card: CardProps) {
    return card.id === id
  }

  const cardData = data.cards.find(isId)

  return (
    <div className="container mx-auto p-5">
      <h1 className="py-5 text-center text-3xl font-bold">
        Один из фактов про кошек
      </h1>
      <Link
        className="mb-5 inline-block rounded-xl border p-3 shadow hover:bg-slate-300"
        to={"/"}
      >
        На главную
      </Link>
      <div className="flex overflow-hidden">
        <img className="rounded" src={cardData?.imgUrl} alt="Фото кошки" />
        <p className="px-6 text-xl">{cardData?.catsFact}</p>
      </div>
    </div>
  )
}

export default CardPage
