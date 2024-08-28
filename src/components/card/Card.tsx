/* eslint-disable jsx-a11y/anchor-is-valid */
import IconButton from "../IconButton/IconButton"
import { FcLike } from "@react-icons/all-files/fc/FcLike"
import { FcLikePlaceholder } from "@react-icons/all-files/fc/FcLikePlaceholder"
import { RiDislikeLine } from "@react-icons/all-files/ri/RiDislikeLine"
import { Link } from "react-router-dom"
import { type AppDispatch, store } from "../../app/store"
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { cardsActions } from "../../features/Cards/cardsSlice"

export interface CardProps {
  id: string
  catsFact: string
  imgUrl: string
}

const Card = ({ id, catsFact, imgUrl }: CardProps) => {
  const dispatch = useAppDispatch<AppDispatch>()

  const [like, setLike] = useState(false)

  const handleClickLike = () => {
    setLike(!like)
  }

  const handleClickDislike = () => {
    console.log("До")
    console.log(store.getState().cardData.data)
    dispatch(cardsActions.cardRemove(id))
    console.log("После")
    console.log(store.getState().cardData.data)
  }

  return (
    <div
      data-like={like}
      className="relative h-[330px] w-[350px] overflow-hidden rounded-xl border p-5 shadow hover:bg-slate-100"
    >
      <Link
        className="absolute bottom-0 left-0 right-0 top-0"
        to={`/card/${id}`}
      />

      <div className="mb-4 h-[250px] w-[310px]">
        <img
          src={imgUrl}
          alt="cat"
          className="h-[250px] w-[310px] rounded-md object-cover"
        />
      </div>
      <p className="w-[250px] truncate">{catsFact}</p>
      <IconButton
        handleClick={handleClickLike}
        className="right-8 top-8 z-10 hover:scale-125"
      >
        {like ? <FcLike size={32} /> : <FcLikePlaceholder size={32} />}
      </IconButton>
      <IconButton
        handleClick={handleClickDislike}
        className="left-8 top-8 z-10 hover:scale-125"
      >
        <RiDislikeLine size={32} fill="white" />
      </IconButton>
    </div>
  )
}

export default Card
