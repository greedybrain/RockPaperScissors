import React from 'react'

const Choice = ({ play }) => {
     return (
          <li className="choice-display"><span role="img" aria-label={play}>{play}</span></li>
     )
}

export default Choice
