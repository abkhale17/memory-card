import React from 'react'
import Template from './Card'
import Grid from '@material-ui/core/Grid'

const Cards = ({cards, handleImageClick}) => {
  return (
    <Grid 
      container
      direction="row"
      spacing={0}
      justify="flex-start"
      alignItems="flex-start"
    >
      {
        cards.map((card) => <Template key={card.id} card={card} handleImageClick={handleImageClick}/>)
      }
    </Grid>
  )
}

export default Cards