const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="flex justify-center rounded-xl bg-blue-300 py-1 px-4 md:text-xl">
      <span className="border-r-2 border-black pr-2">Game Score: {score}</span>
      <span className="pl-2">Best Score: {bestScore}</span>
    </div>
  );
};

export default Scoreboard;
