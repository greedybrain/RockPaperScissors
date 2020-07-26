import React from 'react';
import Logo from './Pages/RPSGame/components/Logo';
import ScoreCard from './Pages/RPSGame/components/ScoreCard';
import RockPaperScissorsContainer from './Pages/RPSGame/containers/RockPaperScissorsContainer';

function App() {
  return (
    <div className="App wrapper">
      <header>
        <div className="logo"><Logo /></div>
        <div className="score-card"><ScoreCard /></div>
      </header>
      <RockPaperScissorsContainer />
    </div>
  );
}

export default App;
