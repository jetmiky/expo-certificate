import { useState } from "react";

// Components
import Button from "../../components/Button";
import ModalAdd from "./Modals/ModalAdd";
import ModalBatchAdd from "./Modals/ModalBatchAdd";
import ModalSearch from "./Modals/ModalSearch";

export default function AdminDashboard(): JSX.Element {
  const [certificate, setCertificate] = useState({});

  const [isModalAddShown, setIsModalAddShown] = useState(false);
  const [isModalBatchAddShown, setIsModalBatchAddShown] = useState(false);
  const [isModalSearchShown, setIsModalSearchShown] = useState(false);

  const handleToggleModal = (modal: "add" | "batch" | "search") => () => {
    if (modal === "add") return setIsModalAddShown(!isModalAddShown);
    if (modal === "batch")
      return setIsModalBatchAddShown(!isModalBatchAddShown);
    if (modal === "search") return setIsModalSearchShown(!isModalSearchShown);
  };

  const handleEditCertificate = (certificate) => {
    setCertificate(certificate);

    setIsModalSearchShown(false);
    setIsModalAddShown(true);
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

      {isModalAddShown && (
        <ModalAdd
          certificate={certificate}
          onToggle={handleToggleModal("add")}
        />
      )}
      {isModalBatchAddShown && (
        <ModalBatchAdd onToggle={handleToggleModal("batch")} />
      )}
      {isModalSearchShown && (
        <ModalSearch
          onToggle={handleToggleModal("search")}
          onEditCertificate={handleEditCertificate}
        />
      )}
    </section>
  );
}
