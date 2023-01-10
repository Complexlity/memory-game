import logo from "../assets/github-light.png";
import Scoreboard from "./Scoreboard";

const Header = ({ score, bestScore, max, setLogin, userData }) => {
  return (
    <div className="hidden items-center gap-4 py-4 px-4 sm:flex">
      <div className="flex w-full flex-1 sm:w-auto">
        <h1 className="main-header w-full text-center text-3xl text-gray-200 md:text-4xl lg:text-5xl ">
          Test Your Memory
        </h1>
        <a
          className="hidden"
          href="https://github.com/Complexlity/memory-game"
          target={"_blank"}
        >
          <img className="ml-4 w-[2rem]" src={logo} alt="" />
        </a>
      </div>
      <div className="m-auto flex items-center justify-center gap-4">
        <Scoreboard score={score} bestScore={bestScore} max={max} />
        <a href="https://github.com/complexlity" target={"_blank"}>
          <img className="w-[2rem]" src={logo} alt="" />
        </a>
        <button
          onClick={setLogin.bind(this, true)}
          className="rounded-xl bg-orange-400 px-4 py-2"
        >
          {userData ? userData.displayName : "LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default Header;
