import React, { Component } from 'react'
import StartButton from '../components/StartButton'
import underscore from 'underscore'

class PlayAreaContainer extends Component {
     constructor(props) {
          super(props)

          this.state = {
               recordedPlay: null
          }
     }

     get _() {
          return underscore
     }
     handleTurningAnimationOn = () => {
          const { refChoicesDisplay } = this.props
          refChoicesDisplay.current.classList.add(
               'animate__animated',
               'animate__shakeY',
               'animate__slow'
          )
     }

     handleTurningAnimationOff = () => {
          const { refChoicesDisplay } = this.props
          refChoicesDisplay.current.classList.remove(
               'animate__animated',
               'animate__shakeY',
               'animate__slow'
          )
     }

     handleRevealingCpuPlay = () => {
          const { plays, renderCpuChoice } = this.props
          const { _ } = this
          this.setState({
               recordedPlay: _.sample(plays)
          })
          renderCpuChoice(this.state.recordedPlay)
     }

     handleStartButtonClick = () => {
          this.handleTurningAnimationOn()
          setTimeout(() => this.handleTurningAnimationOff(), 3000)
          setTimeout(() => this.handleRevealingCpuPlay(), 1700)
     }

     render() {
          const { plays } = this.props
          const userPlays = plays.map((play, index) => {
               return <li key={index}>{play}</li>
          })
          return (
               <div className="play-area">
                    <div className="button-area play-area-content">
                         <StartButton handleStartButtonClick={this.handleStartButtonClick} />
                    </div>
                    <div className="pointer-area play-area-content" >
                         <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="choice-area play-area-content" >
                         <ul className="play-area-choices">
                              { userPlays }
                         </ul>
                    </div>
               </div>
          )
     }
}

export default PlayAreaContainer
