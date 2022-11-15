import { ChangeEvent, FormEvent, useState } from "react";

// APIs
import { login } from "../../api/admin";

// Router
import { useNavigate } from "react-router-dom";

// Components
import Input from "../../components/Input";
import Button from "../../components/Button";

interface Props {
  setIsAuthenticated: Function;
}

export default function AdminLogin(props: Props): JSX.Element {
  const navigate = useNavigate();

  const { setIsAuthenticated } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await login(username, password);
      console.log("Admin login success!");

      setIsAuthenticated(true);
      navigate("/admin/dashboard");
    } catch (error: Error | any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleLogin}>
      <Input
        id="username"
        label="Username"
        name="username"
        onChange={handleInputChange}
        value={username}
        required
      />

      <Input
        id="password"
        label="Password"
        name="password"
        onChange={handleInputChange}
        value={password}
        type="password"
        required
      />

      <Button isLoading={isLoading}>Login</Button>
    </form>
  );
}
