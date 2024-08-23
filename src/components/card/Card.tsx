export type CardProps = {
  catsFact: string
  imgUrl: string
}

const Card = ({ catsFact, imgUrl }: CardProps) => {
  return (
    <div className="h-[330px] w-[350px] overflow-hidden rounded-xl border p-5 shadow">
      <div className="mb-4 h-[250px] w-[310px]">
        <img
          src={imgUrl}
          alt="cat"
          className="h-[250px] w-[310px] object-contain"
        />
      </div>
      <div className="px-4">{catsFact}</div>
    </div>
  )
}

export default Card
