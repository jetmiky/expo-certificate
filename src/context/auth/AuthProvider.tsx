import { useState, useEffect, ReactNode } from "react";

// Firebase
import { User, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

// Auth API
import { setAPIAuthorization, removeAPIAuthorization } from "../../config/api";

// Context
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode | JSX.Element;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | boolean | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!!user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    onIdTokenChanged(auth, async (user) => {
      if (!!user) {
        const token = await user.getIdToken();
        setAPIAuthorization(token);
      } else {
        removeAPIAuthorization();
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
