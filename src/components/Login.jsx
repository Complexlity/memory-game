import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config.js";
// const Login = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   async function submitForm(e) {
//     e.preventDefault();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const userAuth = await useAuth(email, password);
//     console.log(userAuth);
//     // emailRef.current.value = "";
//     // passwordRef.current.value = "";
//     const docRef = doc(db, "best-scores", userAuth.result.uid);
//     const user = await getDoc(docRef);
//     console.log(user.id, user.data());
//   }

//   const inputStyles = "px-4 py-4 mb-4";
//   return (
//     <div className="text-center">
//       <form
//         action=""
//         className="mx-auto my-24 flex max-w-[70rem] flex-col bg-gray-200 py-4 px-4 px-2 "
//         onSubmit={submitForm}
//       >
//         <input
//           className={inputStyles}
//           ref={emailRef}
//           type="email"
//           placeholder="email"
//         />
//         <input
//           className={inputStyles}
//           ref={passwordRef}
//           type="password"
//           placeholder="password"
//         />
//         <button className=" mx-auto w-2/5 max-w-[40rem] rounded-full bg-blue-300 py-4">
//           Login
//         </button>
//       </form>
//       <button
//         onClick={logOut}
//         className=" mx-auto mt-2 w-2/5 max-w-[40rem] rounded-full bg-red-300 py-4"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { useState } from "react";

const Login = ({ setLogin, setSignUp }) => {
  const emptyValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(emptyValues);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ value: false, message: "", field: "" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  function validateInputs() {
    const result = { success: false, message: "", field: "" };
    const { email, password } = values;

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

  function handleSubmit(e) {
    e.preventDefault();
    let result = validateInputs();
    if (result.success) {
      console.log("I was validated correctly");
      setError({ value: false });
    } else {
      setError({ value: true, message: result.message, field: result.field });
    }
  }

  return (
    <div
      onClick={() => {
        setLogin(false);
        setSignUp(false);
      }}
      className="overlayScreen absolute  inset-0 grid content-center items-center justify-center bg-white  opacity-95"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        action=""
        className="grid w-full max-w-[80rem] gap-4 rounded-xl bg-white p-8"
      >
        <h1 className="text-center">LOAD YOUR BEST SCORE</h1>
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

        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          size="large"
          className="w-full"
        >
          Login
        </Button>
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
