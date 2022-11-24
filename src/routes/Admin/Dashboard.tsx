import { useState, useEffect } from "react";

// APIs
import { getDashboardData } from "../../api/dashboard";
import { logout } from "../../api/auth";

// Router
import { Link } from "react-router-dom";

// Contexts
import useAuthContext from "../../context/auth/useAuthContext";

// Types
import { User } from "firebase/auth";
import Certificate from "../../types/Certificate";

// Components
import Button from "../../components/Button";
import ModalAdd from "./Modals/ModalAdd";
import ModalBatchAdd from "./Modals/ModalBatchAdd";
import ModalSearch from "./Modals/ModalSearch";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default function AdminDashboard(): JSX.Element {
  const user = useAuthContext() as User;
  const [data, setData] = useState<any>({});
  const [certificate, setCertificate] = useState<Certificate | {}>({});

  const [isModalAddShown, setIsModalAddShown] = useState(false);
  const [isModalBatchAddShown, setIsModalBatchAddShown] = useState(false);
  const [isModalSearchShown, setIsModalSearchShown] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDashboardData();
        setData(response.data);
      } catch {
        setData({});
      }
    };

    getData();
  }, []);

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
    <main className="container">
      <div className="text-center">
        <h2 className="text-indigo-800">Halo, {user.displayName}!</h2>
        <p>Apa yang mau kamu lakukan hari ini?</p>
      </div>

      <section className="my-10 text-center">
        <div className="mb-2">
          <Button onClick={handleToggleModal("add")}>
            <Icon icon="plus" className="mr-3" />
            Tambah sertifikat
          </Button>
        </div>
        <div className="mb-2">
          <Button onClick={handleToggleModal("batch")}>
            <Icon icon="cloud-upload-alt" className="mr-3" />
            Tambah sertifikat (batch)
          </Button>
        </div>

        <hr className="w-1/3 my-7 mx-auto" />

        <div>
          <Button onClick={handleToggleModal("search")} theme="green">
            <Icon icon="search" className="mr-3" />
            Cari sertifikat
          </Button>
        </div>
      </section>

      <div className="text-center">
        {data.certificate_count && (
          <p className="text-sm">
            Di database tercatat{" "}
            <span className="text-indigo-700 font-bold">
              {data.certificate_count} sertifikat.
            </span>
          </p>
        )}
      </div>

      <div className="mt-20 text-center">
        <Link
          to="/"
          className="text-sm text-gray-500 underline-offset-8 hover:underline"
          onClick={logout}
        >
          Apa kamu sudah selesai? Log out.
        </Link>
      </div>

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
