const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scoring flex justify-center rounded-xl bg-indigo-700 px-2 text-white md:text-3xl">
      <span className="border-r-2 border-black pr-2">Game Score: {score}</span>
      <span className="pl-2">Best Score: {bestScore}</span>
    </div>
  );
};

export default Scoreboard;
