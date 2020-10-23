import React from 'react'
import Card from './Card'

const Cards = ({cards, handleImageClick}) => {
  return (
  <div>
    {
      cards.map((card) => <Card key={card.id} card={card} handleImageClick={handleImageClick}/>)
    }
  </div>
  )
}

export default Cards