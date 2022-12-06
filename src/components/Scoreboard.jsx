const Scoreboard = ({ score, bestScore, max }) => {
  return (
    <div className="scoring mx-auto flex w-4/5 justify-evenly rounded-xl bg-indigo-700 px-2 pt-1 pb-0 text-white sm:w-full sm:justify-center md:text-3xl">
      <span className="border-black pr-2 sm:border-r-2">
        Game Score: {score}
      </span>
      <span className="pl-2">
        Best Score: {bestScore}
        {max && " (Max)"}
      </span>
    </div>
  );
};

export default Scoreboard;
