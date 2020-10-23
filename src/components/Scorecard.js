import React from 'react'

const Scorecard = ({score, bestScore}) => {
  return (
  <div>
    <p> Score: {score}</p>
    <p>Best score: {bestScore}</p>
  </div>
  )
}

export default Scorecard