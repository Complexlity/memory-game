// This creates the top most components sending the user to the main page (without the login function)
const Redirect = () => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-zinc-900 py-3 text-center font-mono text-sm sm:flex-row sm:text-lg">
      <p className="text-white">Back to main site</p>
      <p className=" text-yellow-400">
        <span>{"-> "}</span>
        <a
          href="https://complexlity-memory-game.netlify.app"
          className="cursor-pointer text-blue-400 hover:underline"
        >
          memorygame.com
        </a>
      </p>
    </div>
  );
};

export default Redirect;
