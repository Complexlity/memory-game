import logo from "../assets/github-light.png";
import Scoreboard from "./Scoreboard";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useRef, useState } from "react";

const Header = ({ score, bestScore, max, setLogin, userData, resetAll }) => {
  const [logOutButton, setLogOutButton] = useState(false);
  const buttonRef = useRef();

  function showLogOut() {
    if (logOutButton) buttonRef.current.style.display = "none";
    else buttonRef.current.style.display = "block";
    setLogOutButton(!logOutButton);
  }

  function hideLogOut() {
    buttonRef.current.style.display = "none";
    setLogOutButton(!logOutButton);
  }
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
          <span onClick={setLogin.bind(this, true)} className="w-[8rem]">
            <Button className="w-full" variant="outlined">
              Log In
            </Button>
          </span>
        )}

        {userData && (
          <div onClick={showLogOut} onBlur={hideLogOut} className="relative">
            <Button
              className="w-auto"
              variant="contained"
              endIcon={<ExpandMoreIcon />}
              color="success"
            >
              {userData.displayName}
            </Button>

            <span
              ref={buttonRef}
              onClick={resetAll}
              className="absolute top-[100%] right-0 hidden w-full "
            >
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
