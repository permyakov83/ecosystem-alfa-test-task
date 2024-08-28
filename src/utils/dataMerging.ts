import { type CardProps } from "../components/Card/Card"
import { type FactsApiResponse } from "../features/Cards/factsApiSlice"
import { type ImagesApiResponse } from "../features/Cards/imagesApiSlice"

interface IDataMergingInput {
  facts: FactsApiResponse
  images: ImagesApiResponse
}

export function DataMerging({ facts, images }: IDataMergingInput): CardProps[] {
  const cardListData: CardProps[] = []

  if (facts.data.length !== images.length) return cardListData

  for (let i = 0; i < facts.data.length; i++) {
    cardListData[i] = {
      id: images[i].id,
      like: false,
      imgUrl: images[i].url,
      catsFact: facts.data[i],
    }
  }

  return cardListData
}
