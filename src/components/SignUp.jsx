import { useRef } from "react";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  function submitForm(e) {
    e.preventDefault();
    const newObject = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(newObject);
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
        Submit
      </button>
    </form>
  );
};

export default SignUp;
