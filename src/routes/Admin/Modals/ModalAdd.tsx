import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// APIs
import { addCertificate } from "../../../api/certificate";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Types
import Certificate, { instanceOfCertificate } from "../../../types/Certificate";

interface Props {
  certificate: Certificate | {};
  onResetCertificate: Function;
  onToggle: Function;
}

export default function ModalAdd(props: Props): JSX.Element {
  const { certificate, onResetCertificate, onToggle } = props;

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [event, setEvent] = useState("Profesi Keuangan Expo 2022");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("120 menit");
  const [name, setName] = useState("");

  // Init certificate if provided
  useEffect(() => {
    if (instanceOfCertificate(certificate)) {
      setEvent(certificate.event);
      setId(certificate.id);
      setTitle(certificate.title);
      setDuration(certificate.duration);
      setName(certificate.name);

      setIsEditMode(true);
    }
  }, [certificate]);

  const handleInputChange =
    (name: "id" | "title" | "event" | "name" | "duration") =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (name === "event") return setEvent(value);
      if (name === "id") return setId(value);
      if (name === "title") return setTitle(value);
      if (name === "duration") return setDuration(value);
      if (name === "name") return setName(value);
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    try {
      const certificate: Certificate = { event, id, title, duration, name };
      await addCertificate(certificate);

      const message = isEditMode
        ? "Edit sertifikat berhasil!"
        : "Tambah sertifikat berhasil!";
      alert(message);

      onResetCertificate();
      onToggle();
    } catch (error) {
      alert("Unexpected error occured");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <Modal
      title={isEditMode ? "Edit Certificate" : "Tambah Certificate"}
      onToggle={onToggle}
    >
      <form
        className="flex flex-col w-80"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="mt-1 mb-5">
          <Input
            id="event"
            label="Kegiatan"
            name="event"
            value={event}
            onChange={handleInputChange("event")}
            required
          />
        </div>
        <div className="mb-5">
          <Input
            id="id"
            label="Nomor Sertifikat"
            name="id"
            value={id}
            onChange={handleInputChange("id")}
            required
          />
        </div>
        <div className="mb-5">
          <Input
            id="title"
            label="Judul Webinar"
            name="title"
            value={title}
            onChange={handleInputChange("title")}
            required
          />
        </div>
        <div className="mb-5">
          <Input
            id="duration"
            label="Durasi Webinar (120 menit)"
            name="duration"
            value={duration}
            onChange={handleInputChange("duration")}
            required
          />
        </div>
        <div className="mb-5">
          <Input
            id="name"
            label="Nama Peserta"
            name="name"
            value={name}
            onChange={handleInputChange("name")}
            required
          />
        </div>

        <Button isLoading={isSubmitLoading}>
          <Icon icon="save" className="mr-3" />
          Simpan
        </Button>
      </form>
    </Modal>
  );
}
