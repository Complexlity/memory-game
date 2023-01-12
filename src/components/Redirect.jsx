const Redirect = () => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-zinc-900 py-3 text-center font-mono text-sm sm:flex-row sm:text-lg">
      <p className="text-white">Try out a preview of the new login feature</p>
      <p className=" justify-centers mx-auto flex items-center gap-2 text-yellow-400">
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
