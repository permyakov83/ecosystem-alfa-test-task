import CardList from "../features/CardList/CardList"
import { facts, images } from "../moks"
import { DataMerging } from "../utils/dataMerging"

const Main = () => {
  const data = DataMerging({ facts, images })

  return (
    <div className="container mx-auto p-5">
      <h1 className="py-5 text-center text-3xl font-bold">Факты про кошек</h1>
      <div className="overflow-hidden">
        <CardList cards={data.cards} />
      </div>
    </div>
  )
}

export default Main
