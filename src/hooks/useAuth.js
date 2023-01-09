import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

export default async function useAuth(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = await userCredential.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`${errorCode} \n ${errorMessage}`);
  }
}
