// Router
import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: JSX.Element;
}

export default function PrivateRoute(props: Props): JSX.Element {
  const { isAuthenticated, children } = props;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
