import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitForm(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userAuth = await useAuth(email, password, false);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    if (userAuth.success) {
      await setDoc(doc(db, "best-scores", userAuth.result.uid), {
        bestScore: 0,
      });
      console.log("User data added successfully");
    }
  }
  const inputStyles = "px-4 py-4 mb-4";
  return (
    <form
      action=""
      className="mx-auto my-24 flex max-w-[70rem] flex-col bg-gray-200 py-4 px-4 px-2 "
      onSubmit={submitForm}
    >
      <input
        className={inputStyles}
        ref={emailRef}
        type="email"
        placeholder="email"
      />
      <input
        className={inputStyles}
        ref={passwordRef}
        type="password"
        placeholder="password"
      />
      <button className=" mx-auto w-2/5 max-w-[40rem] rounded-full bg-blue-300 py-4">
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
