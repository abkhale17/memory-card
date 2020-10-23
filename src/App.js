import React, {useState} from 'react';
import Scorecard from './components/Scorecard'
import Cards from './components/Cards'
import CardDB from './CardDB'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [memoryCard, setMemoryCard] = useState([])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const handleImageClick = (id) => {
    let clickedImage = CardDB.filter((card) => card.id === id)[0]
    if( memoryCard.includes(clickedImage) ) {
      if( score > bestScore ) {
        setBestScore(score)
      }
      setScore(0)
      setMemoryCard([])
    } else {
      setMemoryCard(memoryCard.concat(clickedImage))
      console.log("-----state changed=======")
      setScore(score+1)
    }
    shuffleArray(CardDB)
  }

  return (
    <div className="App">
      {console.log("-----render======")}
      <Scorecard score = {score} bestScore = {bestScore}/>
      <Cards cards = {CardDB} handleImageClick = {handleImageClick}/>
    </div>
  );
}

export default App;
