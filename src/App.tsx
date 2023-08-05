import Paper from "./components/SVG/Paper";
import Rock from "./components/SVG/Rock";
import Scissors from "./components/SVG/Scissors";
import "./App.css";

const RockPaperScissors = () => {
  return (
    <main className="game-container">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <section className="player-container">
        <h2>Player</h2>
        <span className="far" id="playerRock">
          <Rock />
        </span>
        <span className="far" id="playerPaper">
          <Paper />
        </span>
        <span className="far" id="playerScissors">
          <Scissors />
        </span>
      </section>
      <section className="computer-container">
        <h2>Computer</h2>
        <span className="far" id="computerRock">
          <Rock />
        </span>
        <span className="far" id="computerPaper">
          <Paper />
        </span>
        <span className="far" id="computerScissors">
          <Scissors />
        </span>
      </section>
      <section className="result-container">
        {/* <h3 id="resultText">{resultText}</h3> */}
      </section>
    </main>
  );
};

export default RockPaperScissors;
