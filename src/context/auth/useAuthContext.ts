import { useContext } from "react";

// Types
import { User } from "firebase/auth";

// Context
import AuthContext from "./AuthContext";

const useAuthContext = (): User | boolean | null => {
  const user = useContext(AuthContext);
  return user;
};

export default useAuthContext;
