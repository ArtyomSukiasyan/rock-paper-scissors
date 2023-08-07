interface IRules {
  rock: { name: string; defeats: string };
  paper: { name: string; defeats: string };
  scissors: { name: string; defeats: string };
}

export const rules: IRules = {
  rock: { name: "rock", defeats: "scissors" },
  paper: { name: "paper", defeats: "rock" },
  scissors: { name: "scissors", defeats: "paper" },
};
