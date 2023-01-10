import logo from "../assets/github-light.png";
import Scoreboard from "./Scoreboard";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = ({ score, bestScore, max, setLogin, userData, resetAll }) => {
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
        {!userData && (
          <button
            onClick={setLogin.bind(this, true)}
            className="rounded-xl bg-orange-400 px-4 py-2"
          >
            LOGIN
          </button>
        )}
        {userData && (
          // <button className="group relative flex cursor-default items-center gap-1 rounded-xl bg-orange-400 px-4 py-2">
          //   {userData.displayName}
          //   <AiFillCaretDown />
          //   <span
          //     onClick={resetAll}
          //     className="pointer absolute top-[80%] right-0 hidden w-[80%] rounded-md bg-red-400 py-2 hover:bg-red-700 group-hover:inline"
          //   >
          //     Log Out
          //   </span>
          // </button>
          <div className="group relative">
            <Button
              className="group w-auto"
              variant="contained"
              endIcon={<ExpandMoreIcon />}
            >
              {userData.displayName}
            </Button>
            <span className="absolute top-[100%] left-[20%] right-0 hidden group-hover:inline">
              <Button
                className="w-full text-white"
                variant="outlined"
                color="error"
              >
                Log Out
              </Button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
