/* eslint-disable jsx-a11y/anchor-is-valid */
import IconButton from "../IconButton/IconButton"
import { FcLikePlaceholder } from "@react-icons/all-files/fc/FcLikePlaceholder"
import { RiDislikeLine } from "@react-icons/all-files/ri/RiDislikeLine"
import { Link } from "react-router-dom"
import { store } from "../../app/store"

export interface CardProps {
  id: string
  catsFact: string
  imgUrl: string
}

const Card = ({ id, catsFact, imgUrl }: CardProps) => {
  const handleClick = () => {
    console.log(store.getState().cardsData.data)
  }

  return (
    <Link to={`/card/${id}`}>
      <div className="relative h-[330px] w-[350px] overflow-hidden rounded-xl border p-5 shadow hover:bg-slate-100">
        <div className="mb-4 h-[250px] w-[310px]">
          <img
            src={imgUrl}
            alt="cat"
            className="h-[250px] w-[310px] rounded-md object-cover"
          />
        </div>
        <p className="w-[250px] truncate">{catsFact}</p>
        <IconButton
          handleClick={handleClick}
          className="right-8 top-8 hover:scale-125"
        >
          <FcLikePlaceholder size={32} />
        </IconButton>
        <IconButton
          handleClick={handleClick}
          className="left-8 top-8 hover:scale-125"
        >
          <RiDislikeLine size={32} fill="white" />
        </IconButton>
      </div>
    </Link>
  )
}

export default Card
