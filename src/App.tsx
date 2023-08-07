import { useState } from "react";
import "./App.css";
import getComputerMove from "./helpers/getComputerMove";
import { rules } from "./constants/rules";
import { chooses } from "./constants/chooses";
import { IPieces } from "./models/Pieces";

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

  const computerChooses = () => {
    const computerMove = getComputerMove();
    setComputerChoice(computerMove);

    displayComputerChoice();
  };

  const displayComputerChoice = () => {
    const computerIcon = document.getElementById(`computer-${computerChoice}`);
    computerIcon?.classList.add("selected");
  };

  const updateResult = (playerChoice: IPieces) => {
    if (playerChoice === computerChoice) {
      setResultText("It's a draw!");

      return;
    }

    const choice = rules[playerChoice];

    if (choice.defeats === computerChoice) {
      setResultText("You won!");

      return;
    }

    setResultText("You lost!");
  };

  const playerChooses = (playerChoice: IPieces) => {
    setResultText("");
    resetSelected();
    displayPlayerChoice(playerChoice);
    computerChooses();
    updateResult(playerChoice);
  };

  return (
    <main className="game-container">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <section className="player-container">
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
      <section className="computer-container">
        <h2>Computer</h2>
        {chooses.map((el) => (
          <span className="far" id={`computer-${el.type}`} key={el.type}>
            <el.Component />
          </span>
        ))}
      </section>
      <section className="result-container">
        <h3 id="resultText">{resultText}</h3>
      </section>
    </main>
  );
}

export default App;
