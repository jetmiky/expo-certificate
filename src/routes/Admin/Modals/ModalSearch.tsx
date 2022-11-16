import { useState, FormEvent, ChangeEvent } from "react";

// Types
import Certificate from "../../../types/Certificate";

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
  const [certificate, setCertificate] = useState<any>({});

  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await search(id);
      const certificate = response.data.certificate;

      setCertificate(certificate);
    } catch (error: AxiosError | any) {
      if (error.response && error.response.status === 404) {
        return alert("Certificate not found.");
      }

      alert("Unexptected error occured.");
    }
  };

  const handleEdit = () => {
    onEditCertificate(certificate);
  };

  const handleDelete = async () => {
    setIsDeleteLoading(true);

    try {
      await deleteCertificate(certificate.id);
      alert("Delete certificate success!");

      setCertificate({});
      setId("");
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
        <Input
          id="id"
          label="Nomor Sertifikat"
          name="id"
          value={id}
          onChange={handleInputChange}
          required
        />

        <button className="hidden">Submit</button>
      </form>

      {!!certificate?.name && (
        <>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete} isLoading={isDeleteLoading}>
            Delete
          </Button>
        </>
      )}
    </Modal>
  );
}
