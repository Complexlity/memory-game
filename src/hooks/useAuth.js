// This file takes in email and password and either reads or writes to the firebase application depending on if login or signup

// See /firebase.config for how the auth variable is created
import { auth } from "../../firebase.config";

// These two functions are used to create user or sign in user. More functions offered by firebase like signInWithGmail could also be imported here and used to authenticate user
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default async function useAuth(email, password, signIn = true) {
  //This line checks if we're logging in or signing up using the 'signIn' variable which by default is true but set false in the signUp function. See /src/components/SignUp.jsx for it's usage
  let triggerFunction = signIn
    ? signInWithEmailAndPassword
    : createUserWithEmailAndPassword;

  try {
    const userCredential = await triggerFunction(auth, email, password);
    const user = userCredential.user;
    return { success: true, result: user };
  } catch (error) {
    const errorMessage = mapAuthCodeToMessage(error.code);
    return { success: false, result: errorMessage };
  }
}

// This function converts cryptic error messages to descriptive ones
function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case "auth/invalid-password":
      return "Password provided is not corrected";

    case "auth/invalid-email":
      return "Email provided is invalid";
    case "auth/user-not-found":
      return "Account Not Found. Sign Up First";
    case "auth/wrong-password":
      return "Wrong password entered";
    case "auth/email-already-exists":
      return "Email already exits";
    case "auth/network-request-failed":
      return "Connection Error";
    case "auth/email-already-in-use":
      return "Email aready taken";
    // More error cases could be written here
    default:
      return "";
  }
}
