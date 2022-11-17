import { useState } from "react";

// Types
import Certificate from "../../types/Certificate";

// Components
import Button from "../../components/Button";
import ModalAdd from "./Modals/ModalAdd";
import ModalBatchAdd from "./Modals/ModalBatchAdd";
import ModalSearch from "./Modals/ModalSearch";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

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

  const handleResetCertificate = () => {
    setCertificate({});
  };

  return (
    <main className="container pb-10">
      <div className="text-center">
        <h2 className="text-indigo-800">Hello buddy!</h2>
        <p>What do you want to do today?</p>
      </div>

      <section className="my-10 text-center">
        <div className="mb-2">
          <Button onClick={handleToggleModal("add")}>
            <Icon icon="plus" className="mr-3" />
            Add certificate
          </Button>
        </div>
        <div className="mb-2">
          <Button onClick={handleToggleModal("batch")}>
            <Icon icon="cloud-upload-alt" className="mr-3" />
            Add certificate (batch)
          </Button>
        </div>

        <hr className="w-1/3 my-7 mx-auto" />

        <div>
          <Button onClick={handleToggleModal("search")} theme="green">
            <Icon icon="search" className="mr-3" />
            Search certificate
          </Button>
        </div>
      </section>

      {isModalAddShown && (
        <ModalAdd
          certificate={certificate}
          onResetCertificate={handleResetCertificate}
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
