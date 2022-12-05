const Scoreboard = ({ score, bestScore, max }) => {
  return (
    <div className="scoring flex justify-center rounded-xl bg-indigo-700 px-2 pt-1 pb-0 text-white md:text-3xl">
      <span className="border-r-2 border-black pr-2">Game Score: {score}</span>
      <span className="pl-2">
        Best Score: {bestScore}
        {max && "(Max)"}
      </span>
    </div>
  );
};

export default Scoreboard;
