import { useState, FormEvent, ChangeEvent } from "react";

// APIs
import { AxiosError } from "axios";
import { search } from "../../../api/certificate";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

interface Props {
  onToggle: Function;
}

export default function ModalSearch(props: Props): JSX.Element {
  const { onToggle } = props;

  const [id, setId] = useState("");
  const [certificate, setCertificate] = useState<any>({});

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
          <Button>Edit</Button>
          <Button>Delete</Button>
        </>
      )}
    </Modal>
  );
}
