const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="flex justify-center gap-4 bg-blue-300">
      <span>Game Score: {score}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  );
};

export default Scoreboard;
