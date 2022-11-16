import { useState } from "react";

// Components
import Button from "../../components/Button";

export default function AdminDashboard(): JSX.Element {
  const [isModalAddShown, setIsModalAddShown] = useState(false);
  const [isModalBatchAddShown, setIsModalBatchAddShown] = useState(false);
  const [isModalSearchShown, setIsModalSearchShown] = useState(false);

  const handleToggleModal = (modal: "add" | "batch" | "search") => () => {
    if (modal === "add") return setIsModalAddShown(!isModalAddShown);
    if (modal === "batch")
      return setIsModalBatchAddShown(!isModalBatchAddShown);
    if (modal === "search") return setIsModalSearchShown(!isModalSearchShown);
  };

  return (
    <section>
      <h2>Admin Dashboard here!</h2>
      <p>What do you want to do?</p>

      <Button onClick={handleToggleModal("add")}>Add certificate</Button>
      <Button onClick={handleToggleModal("batch")}>
        Batch add certificate
      </Button>
      <Button onClick={handleToggleModal("search")}>Search certificate</Button>
    </section>
  );
}
