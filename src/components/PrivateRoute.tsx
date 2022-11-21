// Router
import { Navigate } from "react-router-dom";

// Context
import useAuthContext from "../context/auth/useAuthContext";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute(props: Props): JSX.Element {
  const user = useAuthContext();
  const { children } = props;

  if (user === null) {
    return <p>Loading ...</p>;
  } else if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
