import { useState } from "react";
import getComputerMove from "./helpers/getComputerMove";
import getResult from "./helpers/getResult";
import { chooses } from "./constants/chooses";
import { IPieces } from "./models/Pieces";
import "./App.css";

function App() {
  const [playerChoice, setPlayerChoice] = useState<IPieces | "">("");
  const [computerChoice, setComputerChoice] = useState<IPieces | "">("");
  const [resultText, setResultText] = useState("");

  const playerChooses = (choice: IPieces) => {
    setPlayerChoice(choice);

    const computerMove = getComputerMove();
    setComputerChoice(computerMove);

    const result = getResult(choice, computerMove);
    setResultText(result);
  };

  return (
    <main className="game-container">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <section className="container player-container">
        <h2>Player</h2>
        {chooses.map((el) => (
          <span
            className={el.type === playerChoice ? " selected" : ""}
            onClick={() => playerChooses(el.type)}
            key={el.type}
          >
            <el.Component />
          </span>
        ))}
      </section>
      <section className="container">
        <h2>Computer</h2>
        {chooses.map((el) => (
          <span
            className={el.type === computerChoice ? " selected" : ""}
            key={el.type}
          >
            <el.Component />
          </span>
        ))}
      </section>
      <section className="result-container">
        <h3>{resultText}</h3>
      </section>
    </main>
  );
}

export default App;
