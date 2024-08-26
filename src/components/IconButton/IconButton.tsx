import { type ReactNode } from "react"

type IconButtonProps = {
  children: ReactNode
  className: string
}

const IconButton = ({ children, className }: IconButtonProps) => {
  return <button className={`${className} absolute`}>{children}</button>
}

export default IconButton
