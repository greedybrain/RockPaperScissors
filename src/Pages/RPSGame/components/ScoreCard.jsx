import React from 'react'
import { useState } from 'react'

const ScoreCard = () => {
     const [userScore, setUserScore] = useState(0)
     const [cpuScore, setCPUScore] = useState(0)

     return (
          <>
               <div className="user-score score">
                    <div className="user-icon icon">
                         <span role="img" aria-label="user icon emoji">
                              <i className="far fa-user"></i>
                         </span>
                    </div>
                    <div className="points">
                         { userScore }
                    </div>
               </div>
               <div className="cpu-score score">
                    <div className="cpu-icon icon">
                         <span role="img" aria-label="cpu icon emoji">
                              <i className="fas fa-desktop"></i>
                         </span>
                    </div>
                    <div className="points">
                         { cpuScore }
                    </div>
               </div>
          </>
     )
}

export default ScoreCard
