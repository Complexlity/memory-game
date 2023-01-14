// This is the component that sits at the top of the page to send the user to the beta site with log in function
const Redirect = () => {
  return (
    <div className="flex flex-col justify-center gap-1 bg-zinc-900 py-2 text-center font-mono text-base sm:block sm:space-x-2 sm:py-3 sm:text-lg">
      <p className="text-white sm:inline">Try out the new login feature</p>
      <p className=" mx-auto inline-flex items-center justify-center gap-2 text-yellow-400">
        <span className="text-xl">{"->"}</span>
        <a
          href="https://complexlity-beta-memory-game.netlify.app"
          className="cursor-pointer text-center text-blue-400 hover:underline"
        >
          beta.memorygame.com
        </a>
      </p>
    </div>
  );
};

export default Redirect;
