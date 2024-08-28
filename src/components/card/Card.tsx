import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import IconButton from "../IconButton/IconButton"
import { type AppDispatch } from "../../app/store"
import { FcLike } from "@react-icons/all-files/fc/FcLike"
import { cardsActions } from "../../app/cardsSlice"
import { RiDislikeLine } from "@react-icons/all-files/ri/RiDislikeLine"
import { FcLikePlaceholder } from "@react-icons/all-files/fc/FcLikePlaceholder"

export interface CardProps {
  id: string
  like: boolean
  imgUrl: string
  catsFact: string
}

const Card = ({ id, like, catsFact, imgUrl }: CardProps) => {
  const dispatch = useAppDispatch<AppDispatch>()

  const [likeState, setLikeState] = useState(like)

  const handleClickLike = () => {
    setLikeState(!likeState)
    dispatch(cardsActions.likeToggle({ id, likeState }))
  }

  const handleClickDislike = () => {
    dispatch(cardsActions.cardRemove(id))
  }

  return (
    <div
      data-like={likeState}
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
        {likeState ? <FcLike size={32} /> : <FcLikePlaceholder size={32} />}
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
