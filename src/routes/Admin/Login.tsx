import { ChangeEvent, FormEvent, useState } from "react";

// APIs
import { login } from "../../api/auth";

// Router
import { useNavigate } from "react-router-dom";

// Components
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function AdminLogin(): JSX.Element {
  const navigate = useNavigate();

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

      navigate("/admin/dashboard");
    } catch (error: Error | any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container pb-10">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-5">
        <form
          className="col-start-2 md:col-start-3 flex flex-col"
          onSubmit={handleLogin}
          autoComplete="off"
        >
          <div className="my-4">
            <Input
              id="username"
              label="Username"
              name="username"
              onChange={handleInputChange}
              value={username}
              required
            />
          </div>

          <div className="my-4">
            <Input
              id="password"
              label="Password"
              name="password"
              onChange={handleInputChange}
              value={password}
              type="password"
              required
            />
          </div>

          <Button isLoading={isLoading}>Login</Button>
        </form>
      </div>
    </main>
  );
}
