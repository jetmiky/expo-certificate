import { useState, FormEvent, ChangeEvent } from "react";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";

interface Props {
  onToggle: Function;
}

export default function ModalAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [event, setEvent] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const certificate = { id, title, event, name, duration };
    console.log(certificate);
  };

  return (
    <Modal title="Add Certificate" onToggle={onToggle}>
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
