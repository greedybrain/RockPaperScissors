import React, { Component } from 'react'
import PlayAreaContainer from './PlayAreaContainer'

class RockPaperScissorsContainer extends Component {
     constructor(props) {
          super(props)

          this.state = {
               plays: ['✊🏽', '✋🏽', '✌🏽'],
          }
          this.refChoicesDisplay = React.createRef()
     }

     renderCpuChoice = choice => {
          Array.from(this.refChoicesDisplay.current.children).forEach(child => {
               if (child.textContent !== choice) child.remove()
          })
     }

     render() {
          const allPlays = this.state.plays.map((play, index) => <li className="choice-display" key={index}>{play}</li>)
          return (
               <>
                    <ul className="choice-display-container" ref={this.refChoicesDisplay}>
                         { allPlays }
                    </ul>
                    <PlayAreaContainer refChoicesDisplay={this.refChoicesDisplay} plays={this.state.plays} renderCpuChoice={this.renderCpuChoice} />
               </>
          )
     }
}

export default RockPaperScissorsContainer
