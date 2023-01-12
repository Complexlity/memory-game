import Scoreboard from "./Scoreboard";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRef, useState } from "react";

const MobileHeader = ({
  score,
  bestScore,
  max,
  setLogin,
  userData,
  resetAll,
}) => {
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
    <div className="mb-4 pt-4 sm:hidden">
      <div className="mb-4 flex items-center gap-2 px-6">
        <h1 className="main-header flex-1 text-center text-[1.2rem] text-gray-200">
          Test Your Memory
        </h1>

        {!userData && (
          <span onClick={setLogin.bind(this, true)} className="w-auto">
            <Button className="w-auto" variant="outlined">
              Log In
            </Button>
          </span>
        )}

        {userData && (
          <div onClick={showLogOut} className="relative">
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
              onBlur={hideLogOut}
              className="absolute top-[100%] right-0 hidden w-full "
            >
              <Button
                className="w-full text-white"
                variant="contained"
                color="error"
              >
                Log Out
              </Button>
            </span>
          </div>
        )}
      </div>
      <Scoreboard score={score} bestScore={bestScore} max={max} />
    </div>
  );
};

export default MobileHeader;
