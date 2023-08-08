import { rules } from "../constants/rules";
import { IPieces } from "../models/Pieces";

export default function getResult(
  playerChoice: IPieces,
  computerChoice: IPieces | ""
) {
  if (playerChoice === computerChoice) {
    return "Draw!";
  }

  const choice = rules[playerChoice];

  if (choice.defeats === computerChoice) {
    return "You won!";
  }

  return "You lost!";
}
