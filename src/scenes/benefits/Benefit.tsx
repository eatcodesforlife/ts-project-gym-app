import React from 'react'
import { Props } from '@/shared/types'

const Benefit = ({benefit, setIsMenuOpen}: Props) => {
  return (
    <div>
      {benefit?.icon}
      {benefit?.title}
      {benefit?.description}
    </div>
  )
}

export default Benefit