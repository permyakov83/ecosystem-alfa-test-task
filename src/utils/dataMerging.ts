import { type CardListProps } from "@/components/CardList/CardList"

interface IDataMerging {
  facts: { data: string[] }
  images: {
    id: string
    url: string
    width: number
    height: number
  }[]
}

export function DataMerging(data: IDataMerging): CardListProps {
  const cardListData: CardListProps = { data: [] }

  if (data.facts.data.length !== data.images.length) return cardListData

  for (let i = 0; i < data.facts.data.length; i++) {
    cardListData.data[i] = {
      id: data.images[i].id,
      cards: {
        imgUrl: data.images[i].url,
        catsFact: data.facts.data[i],
      },
    }
  }

  return cardListData
}
