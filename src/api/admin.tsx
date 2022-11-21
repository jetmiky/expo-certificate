import { setAuthorization, removeAuthorization } from "../config/api";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const login = async (username: string, password: string) => {
  const emailSuffix = import.meta.env.VITE_LOGIN_EMAIL_SUFFIX;
  const email = `${username}@${emailSuffix}`;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();

    setAuthorization(token);
  } catch (error) {
    throw new Error("Login failed.");
  }
};

export const logout = () => {
  removeAuthorization();
};
