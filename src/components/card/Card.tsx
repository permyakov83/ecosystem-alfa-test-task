export type CardProps = {
  catsFact: string
  imgUrl: string
  id: string
}

export const Card = ({ catsFact, imgUrl }: CardProps) => {
  return (
    <div className="rounded-xl border p-5 shadow">
      <img src={imgUrl} alt="cat" />
      <div>{catsFact}</div>
    </div>
  )
}
