import React from 'react'

const Card = ({card, handleImageClick}) => {
  return (
    <div>
        <p>card {card.id}</p>
        <p>{card.name}</p>
        <img 
          onClick={() => handleImageClick(card.id)}
          className="img"
          id={card.id}
          src={card.src} 
          alt={card.name} 
          width={'200px'} 
          height={'200px'} 
        />
    </div>
  )
}

export default Card