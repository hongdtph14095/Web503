import React from 'react'
import type { ProductType } from '../types/product'

type ShowInfoProps  = {
 name: String,
  children: JSX.Element
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
      Hiii{ props.children}
    </div>
  )
}

export default ShowInfo