export default function getComputerMove() {
  const computerChoiceNumber = Math.random();

  if (computerChoiceNumber < 0.33) {
    return "rock";
  }

  if (computerChoiceNumber <= 0.67) {
    return "paper";
  }

  return "scissors";
}
