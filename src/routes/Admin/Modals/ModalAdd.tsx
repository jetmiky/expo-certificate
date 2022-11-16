import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// APIs
import { addCertificate } from "../../../api/certificate";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";

// Types
import Certificate, { instanceOfCertificate } from "../../../types/Certificate";

interface Props {
  certificate: Certificate | {};
  onToggle: Function;
}

export default function ModalAdd(props: Props): JSX.Element {
  const { onToggle, certificate } = props;

  const [isEditMode, setIsEditMode] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [event, setEvent] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  // Init certificate if provided
  useEffect(() => {
    if (instanceOfCertificate(certificate)) {
      setId(certificate.id);
      setTitle(certificate.title);
      setEvent(certificate.event);
      setName(certificate.name);
      setDuration(certificate.duration);

      setIsEditMode(true);
    }
  }, [certificate]);

  const handleInputChange =
    (name: "id" | "title" | "event" | "name" | "duration") =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (name === "id") return setId(value);
      if (name === "title") return setTitle(value);
      if (name === "event") return setEvent(value);
      if (name === "name") return setName(value);
      if (name === "duration") return setDuration(value);
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const certificate: Certificate = { id, title, event, name, duration };

    try {
      await addCertificate(certificate);

      alert("Add certificate success!");
      onToggle();
    } catch (error) {
      alert("Unexpected error occured");
    }
  };

  return (
    <Modal
      title={isEditMode ? "Edit Certificate" : "Add Certificate"}
      onToggle={onToggle}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          id="id"
          label="Nomor Sertifikat"
          name="id"
          value={id}
          onChange={handleInputChange("id")}
          required
        />

        <Input
          id="title"
          label="Judul Webinar"
          name="title"
          value={title}
          onChange={handleInputChange("title")}
          required
        />

        <Input
          id="event"
          label="Kegiatan"
          name="event"
          value={event}
          onChange={handleInputChange("event")}
          required
        />

        <Input
          id="name"
          label="Nama Peserta"
          name="name"
          value={name}
          onChange={handleInputChange("name")}
          required
        />

        <Input
          id="duration"
          label="Durasi Webinar"
          name="duration"
          value={duration}
          onChange={handleInputChange("duration")}
          required
        />

        <button className="hidden">Submit</button>
      </form>
    </Modal>
  );
}
