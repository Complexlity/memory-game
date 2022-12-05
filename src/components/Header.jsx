import logo from "../assets/github.png";
import Scoreboard from "./Scoreboard";

const Header = ({ score, bestScore }) => {
  return (
    <div className="flex items-center gap-4 bg-green-400 py-4 px-4 py-2 ">
      <div className="flex w-full flex-1 sm:w-auto">
        <h1 className="w-full text-center text-2xl md:text-4xl ">
          Anime Memory Game
        </h1>
        <a
          className="hidden"
          href="https://github.com/complexlity"
          target={"_blank"}
        >
          <img className="ml-4 w-[2rem]" src={logo} alt="" />
        </a>
      </div>
      <div className="m-auto flex items-center justify-center gap-4">
        <Scoreboard score={score} bestScore={bestScore} />
        <a href="https://github.com/complexlity" target={"_blank"}>
          <img className="w-[2rem]" src={logo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
