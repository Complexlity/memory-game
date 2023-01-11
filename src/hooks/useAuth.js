import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default async function useAuth(email, password, signIn = true) {
  let triggerFunction = signIn
    ? signInWithEmailAndPassword
    : createUserWithEmailAndPassword;
  try {
    const userCredential = await triggerFunction(auth, email, password);
    const user = userCredential.user;
    return { success: true, result: user };
  } catch (error) {
    console.log(error.code);
    const errorMessage = mapAuthCodeToMessage(error.code);
    return { success: false, result: errorMessage };
  }
}

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
    // Many more authCode mapping here...

    default:
      return "";
  }
}
