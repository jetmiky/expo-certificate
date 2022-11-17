import { useState, FormEvent, ChangeEvent } from "react";

// Types
import Certificate, { instanceOfCertificate } from "../../../types/Certificate";

// APIs
import { AxiosError } from "axios";
import { search, deleteCertificate } from "../../../api/certificate";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

interface Props {
  onToggle: Function;
  onEditCertificate: Function;
}

export default function ModalSearch(props: Props): JSX.Element {
  const { onToggle, onEditCertificate } = props;

  const [id, setId] = useState("");
  const [certificate, setCertificate] = useState<Certificate | {}>({});

  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearchLoading(true);

    try {
      const response = await search(id);
      const certificate = response.data.certificate;

      setCertificate(certificate);
    } catch (error: AxiosError | any) {
      if (error.response && error.response.status === 404) {
        setCertificate({});
        return alert("Certificate tidak ditemukan!");
      }

      alert("Unexpected error occured.");
    } finally {
      setIsSearchLoading(false);
    }
  };

  const handleEdit = () => {
    onEditCertificate(certificate);
  };

  const handleDelete = async () => {
    setIsDeleteLoading(true);

    try {
      if (instanceOfCertificate(certificate)) {
        await deleteCertificate(certificate.id);
        alert("Hapus certificate berhasil!");

        setCertificate({});
        setId("");
      } else {
        throw new Error("Certificate is not searched yet.");
      }
    } catch (error) {
      console.log(error);
      alert("Unknown error occured.");
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <Modal title="Search Certificate" onToggle={onToggle}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mt-2 mb-1 w-80">
          <Input
            id="id"
            label="Nomor Sertifikat"
            name="id"
            value={id}
            onChange={handleInputChange}
            disabled={isSearchLoading}
            autoFocus
            required
          />
        </div>
        <p className="text-sm">Tekan "Enter" untuk mencari sertifikat.</p>

        <button className="hidden">Cari</button>
      </form>

      {instanceOfCertificate(certificate) && (
        <div className="mt-8">
          <hr className="mb-4" />

          <p className="text-sm text-center">
            <strong>Sertifikat berhasil ditemukan!</strong>
            <br />
            Pilih salah satu aksi berikut.
          </p>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button onClick={handleEdit}>Ubah</Button>

            <Button
              onClick={handleDelete}
              isLoading={isDeleteLoading}
              theme="rose"
            >
              Hapus
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
