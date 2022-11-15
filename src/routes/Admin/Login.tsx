import { ChangeEvent, FormEvent, useState } from "react";

// APIs
import { login } from "../../api/admin";

// Components
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function AdminLogin(): JSX.Element {
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

      // TODO: Redirect to home
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
