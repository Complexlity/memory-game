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
import Box from "@mui/material/Box";

const Login = () => {
  return <div className="absolute inset-0 bg-white">Hello world</div>;
};
export default Login;
