import { IPieces } from "../models/Pieces";

interface IRules {
  rock: { name: IPieces; defeats: IPieces };
  paper: { name: IPieces; defeats: IPieces };
  scissors: { name: IPieces; defeats: IPieces };
}

export const rules: IRules = {
  rock: { name: "rock", defeats: "scissors" },
  paper: { name: "paper", defeats: "rock" },
  scissors: { name: "scissors", defeats: "paper" },
};
