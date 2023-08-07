import Paper from "../components/SVG/Paper";
import Rock from "../components/SVG/Rock";
import Scissors from "../components/SVG/Scissors";
import { IPieces } from "../models/Pieces";

export const chooses: { type: IPieces; Component: () => JSX.Element }[] = [
  {
    type: "rock",
    Component: Rock,
  },
  {
    type: "paper",
    Component: Paper,
  },
  { type: "scissors", Component: Scissors },
];
