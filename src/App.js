import React, {useState} from 'react';
import Scorecard from './components/Scorecard'
import Cards from './components/Cards'
import celebrity from './cardDB/celebrity'
import food from './cardDB/food'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9575cd',
      main: '#424242',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb74d',
      main: '#64dd17',
      dark: '#e65100',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons : {
    padding: theme.spacing(2),
    margin: theme.spacing(1.5),
    width:"200px"
  }
}));

function App() {
  const classes = useStyles();
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cards, setCards] = useState(celebrity)
  const [memoryCard, setMemoryCard] = useState([])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const handleImageClick = (id) => {
    let clickedImage = cards.filter((card) => card.id === id)[0]
    if( memoryCard.includes(clickedImage) ) {
      if( score > bestScore ) {
        setBestScore(score)
      }
      setScore(0)
      setMemoryCard([])
    } else {
      setMemoryCard(memoryCard.concat(clickedImage))
      setScore(score+1)
    }
    shuffleArray(cards)
  }

  const celebrityCards = () => {
    setScore(0)
    setBestScore(0)
    setMemoryCard([])
    setCards(celebrity)
  }

  const foodCards = () => {
    setScore(0)
    setBestScore(0)
    setMemoryCard([])
    setCards(food)
  }
 
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Box component="div" m={1} >
            <Button className={classes.buttons} variant="outlined" color="secondary" onClick={celebrityCards} >Celebrity</Button>
            <Button className={classes.buttons} variant="outlined" color="secondary" onClick={foodCards} >Food</Button>
            <Scorecard score = {score} bestScore = {bestScore}/>
          </Box>
        </AppBar>
      </div>
      <Cards cards = {cards} handleImageClick = {handleImageClick}/>
    </ThemeProvider>
  );
}

export default App;
