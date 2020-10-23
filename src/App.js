import React, {useState} from 'react';
import Scorecard from './components/Scorecard'
import Cards from './components/Cards'
import celebrity from './cardDB/celebrity'
import food from './cardDB/food'

function App() {
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
    <div className="App">
      {console.log("-----render======")}
      <button onClick={celebrityCards}>Celebrity</button>
      <button onClick={foodCards}>Food</button>
      <Scorecard score = {score} bestScore = {bestScore}/>
      <Cards cards = {cards} handleImageClick = {handleImageClick}/>
    </div>
  );
}

export default App;
