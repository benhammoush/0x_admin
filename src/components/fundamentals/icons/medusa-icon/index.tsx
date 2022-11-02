import React from "react"
import IconProps from "../types/icon-type"

const MedusaIcon: React.FC<IconProps> = ({ size = "48", ...attributes }) => {
  const width = +size * 0.9375 // width relative to height (from size prop)
  return (
    <img className=""
    width={width}
    height={size}
     src="/icons/0x.png"
     alt="logo">
    </img>
  )
}

export default MedusaIcon
