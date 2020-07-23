import React from 'react'
import { plays } from '../../../choices'
import Choice from '../components/Choice'

const RockPaperScissorsContainer = () => {
     
     const renderChoices = plays.map((play, index) => {
          return <Choice key={index} play={play}/>
     })
     return (
          <ul>
               { renderChoices }
          </ul>
     )
}

export default RockPaperScissorsContainer
