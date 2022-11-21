import { useContext } from "react";

// Context
import AuthContext from "./AuthContext";

const useAuthContext = () => {
  const user = useContext(AuthContext);
  return user;
};

export default useAuthContext;
