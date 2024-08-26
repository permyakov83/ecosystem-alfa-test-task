import Card from "../../components/Card/Card"
import { useGetFactsQuery } from "./factsApiSlice"
import { DataMerging } from "../../utils/dataMerging"
import { useGetImagesQuery } from "./imagesApiSlice"

const CardList = () => {
  const facts = useGetFactsQuery(9)
  const images = useGetImagesQuery(9)

  if (facts.isError || images.isError) {
    return (
      <div>
        <h1>Что-то пошло не так :(</h1>
      </div>
    )
  }

  if (facts.isLoading || images.isLoading) {
    return (
      <div>
        <h1>Загружаем информацию про кошек...</h1>
      </div>
    )
  }

  if (
    (facts.isSuccess || images.isSuccess) &&
    facts.data !== undefined &&
    images.data !== undefined
  ) {
    const cards = DataMerging({
      facts: facts.data,
      images: images.data,
    })

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
