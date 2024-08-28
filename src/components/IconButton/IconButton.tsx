import { type ReactNode } from "react"

type IconButtonProps = {
  children: ReactNode
  className: string
  handleClick: () => void
}

const IconButton = ({ children, className, handleClick }: IconButtonProps) => {
  return (
    <button className={`${className} absolute`} onClick={handleClick}>
      {children}
    </button>
  )
}

export default IconButton
