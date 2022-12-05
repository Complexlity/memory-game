import logo from "../assets/github-light.png";
import Scoreboard from "./Scoreboard";

const Header = ({ score, bestScore }) => {
  return (
    <div className="flex items-center gap-4 py-4 px-4">
      <div className="flex w-full flex-1 sm:w-auto">
        <h1 className="main-header w-full text-center text-3xl text-gray-200 md:text-5xl ">
          Test Your Memory
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
