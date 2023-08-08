import { useState } from "react";
import Choice from "./components/Choice";
import getComputerMove from "./helpers/getComputerMove";
import getResult from "./helpers/getResult";
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
      <Choice player="player" choice={playerChoice} onClick={playerChooses} />
      <Choice player="computer" choice={computerChoice} onClick={() => {}} />
      <section className="result-container">
        <h3>{resultText}</h3>
      </section>
    </main>
  );
}

export default App;
