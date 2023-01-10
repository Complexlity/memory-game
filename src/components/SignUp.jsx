import useAuth from "../hooks/useAuth";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.config.js";
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
import { useState } from "react";

const SignUp = ({ setLogin, setSignUp, setUserData, bestScore }) => {
  const emptyValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(emptyValues);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ value: false, message: "", field: "" });
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  function validateInputs(values) {
    const result = { success: false, message: "", field: "" };
    const { displayName, email, password, confirmPassword } = values;
    if (!displayName) {
      result.message = "Display Name cannot be blank";
      result.field = "name";
      return result;
    } else if (!email) {
      result.message = "Email Value Missing";
      result.field = "email";
      return result;
    } else if (!password) {
      result.message = "Password Missing";
      result.field = "password";
      return result;
    } else if (password.length < 6) {
      result.message = "Password to must be >5 characters";
      result.field = "password";
      return result;
    } else if (confirmPassword != password) {
      result.message = "Passwords do not match";
      result.field = "confirmPassword";
      return result;
    } else {
      result.success = true;
      result.field = "";
      return result;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let result = validateInputs(values);
    const { displayName, email, password } = values;
    if (result.success) {
      setError({ value: false });
      const userAuth = await useAuth(email, password, false);
      setError({ value: false });
      if (userAuth.success) {
        const userId = userAuth.result.uid;
        const docRef = doc(db, "best-scores", userId);
        const userData = { displayName, score: bestScore };
        await setDoc(docRef, userData);
        setUserData({ ...userData, id: userId });
        setSignUp(false);
        alert(`Thanks ${displayName} for joining us `);
      } else {
        setError({ value: true, message: userAuth.result, field: "" });
      }
    } else {
      setError({ value: true, message: result.message, field: result.field });
    }
    setLoading(false);
  }

  return (
    <div
      onClick={() => {
        setLogin(false);
        setSignUp(false);
      }}
      className="overlayScreen `  absolute inset-0 grid items-center bg-white  opacity-95"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        action=""
        className="mx-auto grid w-[80%] max-w-[40rem] gap-4 rounded-xl bg-white p-8"
      >
        <h1 className="text-center">SAVE YOUR BEST SCORE</h1>
        {error.value && (
          <div className="rounded-md bg-red-100 py-4 text-center text-red-700">
            {error.message}
          </div>
        )}
        <TextField
          required
          error={error.field == "name"}
          id="outlined-required"
          label="Display Name"
          value={values.displayName}
          onChange={(e) =>
            setValues({ ...values, displayName: e.target.value })
          }
        />
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
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            error={error.field == "confirmPassword"}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
            }
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
            j
            className="w-full"
            disabled={loading}
          >
            {loading ? <CircularProgress /> : "Sign UP"}
          </Button>
        </div>
        <p className="text-center italic">
          Have an account?{" "}
          <span
            onClick={() => {
              setLogin(true);
              setSignUp(false);
            }}
            className="cursor-pointer font-bold text-indigo-400 hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
