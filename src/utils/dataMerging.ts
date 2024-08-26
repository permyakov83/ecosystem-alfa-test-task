import { type CardProps } from "../components/Card/Card"
import { type FactsApiResponse } from "../features/CardList/factsApiSlice"
import { type ImagesApiResponse } from "../features/CardList/imagesApiSlice"

interface IDataMerging {
  facts: FactsApiResponse
  images: ImagesApiResponse
}

export function DataMerging({ facts, images }: IDataMerging): CardProps[] {
  const cardListData: CardProps[] = []

  if (facts.data.length !== images.length) return cardListData

  for (let i = 0; i < facts.data.length; i++) {
    cardListData[i] = {
      id: images[i].id,
      imgUrl: images[i].url,
      catsFact: facts.data[i],
    }
  }

  return cardListData
}
