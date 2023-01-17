import { useState } from "react";

/* -----------------------
Firebase/Authentication functions
------------------------*/
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config.js";
import useAuth from "../hooks/useAuth";
//----------------------------------------

/* -----------------------
Material UI Components 
------------------------*/
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
//---------------------------------------------

const Login = ({ setLogin, setSignUp, setBestScore, setUserData, setMax }) => {
  const emptyValues = {
    email: "",
    password: "",
  };

  //Initialize all the necessary state used values
  const [values, setValues] = useState(emptyValues);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ value: false, message: "", field: "" });
  const [loading, setLoading] = useState(false);

  // These functions toggle the show and hide password in the material  UI password component
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  // This takes the input email and password and checks for validity. More client side could be added here
  function validateInputs(email, password) {
    const result = { success: false, message: "", field: "" };
    if (!email) {
      result.message = "Email Value Missing";
      result.field = "email";
      return result;
    } else if (!password) {
      result.message = "Password Missing";
      result.field = "password";
      return result;
    } else {
      result.success = true;
      result.field = "";
      return result;
    }
  }

  async function handleSubmit(e) {
    setLoading(true); // Adds the loading (Circular Progress from material ui) when the from is submitted
    const { email, password } = values;
    e.preventDefault();
    let result = validateInputs(email, password);
    if (result.success) {
      setError({ value: false }); //Removes the error message from the page when the form is re-submitted
      const userAuth = await useAuth(email, password); // See /src/components/hooks/useAuth.js for the return value from this line of code
      if (userAuth.success) {
        // Gets the user's score from the database if authentication is successfull.
        // See https://firebase.google.com/docs/auth. With emphasis on the 'web' dropdown of the 'Authentication' section aswell as the "Cloud Firestore" section to understand more
        const docRef = doc(db, "best-scores", userAuth.result.uid);
        const user = await getDoc(docRef);
        const userData = user.data();
        const gameUserData = { ...userData, id: user.id };
        setUserData(gameUserData);
        setBestScore(gameUserData.score);
        if (gameUserData.score == 12) setMax(true);
        setLogin(false);
        alert(`Welcome ${gameUserData.displayName}`);
        localStorage.setItem("memGameUser", JSON.stringify(gameUserData));
      } else {
        setError({ value: true, message: userAuth.result, field: "" });
      }
    } else {
      setError({ value: true, message: result.message, field: result.field });
    }
    setLoading(false);
  }

  return (
    <div className="overlayScreen `  absolute inset-0 grid items-center bg-white  opacity-95">
      <div
        onClick={() => {
          setLogin(false);
          setSignUp(false);
        }}
        className="absolute right-0 top-0 "
      >
        <CancelIcon
          className="mx-4 my-4 cursor-pointer"
          color="error"
          fontSize="large"
        />
      </div>
      <form
        action=""
        className="mx-auto grid w-[80%] max-w-[40rem] gap-4 rounded-xl bg-white p-8"
      >
        {" "}
        <h1 className="demo4 text-base font-semibold sm:text-xl">
          <span>LOG IN TO LOAD BEST SCORE</span>
        </h1>
        {error.value && (
          <div className="rounded-md bg-red-100 py-4 text-center text-red-700">
            {error.message}
          </div>
        )}
        <TextField
          error={error.field == "email"}
          required
          id="outlined-required"
          label="Email"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            error={error.field == "password"}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            size="large"
            className="w-full"
            disabled={loading}
          >
            {loading ? <CircularProgress /> : "Log In"}
          </Button>
        </div>
        <p className="text-center italic">
          Don't have an account?{" "}
          <span
            onClick={() => {
              setLogin(false);
              setSignUp(true);
            }}
            className="non-italic cursor-pointer font-bold text-indigo-400 hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
