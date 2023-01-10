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
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`${errorCode} \n ${errorMessage}`);
  }
}
