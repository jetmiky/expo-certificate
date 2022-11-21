import { createContext } from "react";
import { User } from "firebase/auth";

const AuthContext = createContext<User | boolean | null>(null);
export default AuthContext;
