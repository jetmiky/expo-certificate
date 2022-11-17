import { useState } from "react";

// Types
import Certificate from "../../types/Certificate";

// Components
import Button from "../../components/Button";
import ModalAdd from "./Modals/ModalAdd";
import ModalBatchAdd from "./Modals/ModalBatchAdd";
import ModalSearch from "./Modals/ModalSearch";

export default function AdminDashboard(): JSX.Element {
  const [certificate, setCertificate] = useState<Certificate | {}>({});

  const [isModalAddShown, setIsModalAddShown] = useState(false);
  const [isModalBatchAddShown, setIsModalBatchAddShown] = useState(false);
  const [isModalSearchShown, setIsModalSearchShown] = useState(false);

  const handleToggleModal = (modal: "add" | "batch" | "search") => () => {
    if (modal === "add") return setIsModalAddShown(!isModalAddShown);
    if (modal === "batch")
      return setIsModalBatchAddShown(!isModalBatchAddShown);
    if (modal === "search") return setIsModalSearchShown(!isModalSearchShown);
  };

  const handleEditCertificate = (certificate: Certificate) => {
    setCertificate(certificate);

    setIsModalSearchShown(false);
    setIsModalAddShown(true);
  };

  return (
    <main className="container pb-10">
      <div className="text-center">
        <h2 className="text-indigo-800">Hello buddy!</h2>
        <p>What do you want to do today?</p>
      </div>

      <section className="my-10 text-center">
        <div className="mb-2">
          <Button onClick={handleToggleModal("add")}>Add certificate</Button>
        </div>
        <div className="mb-2">
          <Button onClick={handleToggleModal("batch")}>
            Add certificate (batch)
          </Button>
        </div>

        <hr className="w-1/3 my-7 mx-auto" />

        <div>
          <Button onClick={handleToggleModal("search")} theme="green">
            Search certificate
          </Button>
        </div>
      </section>

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
    </main>
  );
}
