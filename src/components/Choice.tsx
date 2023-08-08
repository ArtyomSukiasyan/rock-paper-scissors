import { chooses } from "../constants/chooses";
import { IPieces } from "../models/Pieces";

interface IChoice {
  player: "player" | "computer";
  choice: IPieces | "";
  onClick: Function;
}

export default function Choice({ player, choice, onClick }: IChoice) {
  return (
    <section className={`container ${player}-container`}>
      <h2>{player}</h2>
      {chooses.map((el) => (
        <span
          className={el.type === choice ? " selected" : ""}
          onClick={() => onClick(el.type)}
          key={el.type}
        >
          <el.Component />
        </span>
      ))}
    </section>
  );
}
