import { useState } from "react";
import "./App.css";
import getComputerMove from "./helpers/getComputerMove";
import { chooses } from "./constants/chooses";
import { IPieces } from "./models/Pieces";
import getResult from "./helpers/getResult";

type IDefaultPieces = "";

function App() {
  const [computerChoice, setComputerChoice] = useState<
    IPieces | IDefaultPieces
  >("");
  const [resultText, setResultText] = useState("");

  const resetSelected = () => {
    document.querySelectorAll(".far").forEach((el) => {
      el.classList.remove("selected");
    });
  };

  const displayPlayerChoice = (playerChoice: IPieces) => {
    const playerIcon = document.getElementById(`player-${playerChoice}`);
    playerIcon?.classList.add("selected");
  };

  const displayComputerChoice = () => {
    const computerIcon = document.getElementById(`computer-${computerChoice}`);
    computerIcon?.classList.add("selected");
  };

  const playerChooses = (playerChoice: IPieces) => {
    const computerMove = getComputerMove();
    setComputerChoice(computerMove);

    resetSelected();
    displayPlayerChoice(playerChoice);

    const result = getResult(playerChoice, computerChoice);
    setResultText(result);

    displayComputerChoice();
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
            className="far"
            onClick={() => playerChooses(el.type)}
            id={`player-${el.type}`}
            key={el.type}
          >
            <el.Component />
          </span>
        ))}
      </section>
      <section className="container">
        <h2>Computer</h2>
        {chooses.map((el) => (
          <span className="far" id={`computer-${el.type}`} key={el.type}>
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
