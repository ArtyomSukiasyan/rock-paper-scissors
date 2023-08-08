import { IPieces } from "../models/Pieces";

export default function getComputerMove(): IPieces {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  }

  if (randomNumber <= 0.67) {
    return "paper";
  }

  return "scissors";
}
