import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    margin: "24px",
    float:"left",
    justifyContent:"center",
    display:"table-row"
  },
  name:{
    textAlign:'center'
  }
});

const Template = ({card, handleImageClick}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} key={card.id} >
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            onClick={() => handleImageClick(card.id)}
            component="img"
            alt={card.name}
            height="210"
            width="50"
            image={card.src}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
              {card.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default Template