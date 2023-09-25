import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// APIs
import {
  addCertificate,
  editCertificate,
  getTemplates,
} from "../../../api/certificate";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Types
import Certificate, { instanceOfCertificate } from "../../../types/Certificate";
import Template from "../../../types/Template";

interface Props {
  certificate: Certificate | {};
  onResetCertificate: Function;
  onToggle: Function;
}

export default function ModalAdd(props: Props): JSX.Element {
  const { certificate, onResetCertificate, onToggle } = props;
  const [templates, setTemplates] = useState<Template[]>([]);

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("Peserta");
  const [duration, setDuration] = useState("120 menit");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("Profesi Keuangan Expo 2022");
  const [template, setTemplate] = useState("");

  // Init certificate if provided
  useEffect(() => {
    if (instanceOfCertificate(certificate)) {
      setId(certificate.id);
      setName(certificate.name);
      setTitle(certificate.title);
      setRole(certificate.role);
      setDuration(certificate.duration);
      setDate(certificate.date);
      setEvent(certificate.event);
      setTemplate(certificate.template);

      setIsEditMode(true);
    }
  }, [certificate]);

  useEffect(() => {
    const getAsyncTemplates = async () => {
      const response = await getTemplates();
      setTemplates(response.data.templates);
      setTemplate(response.data.templates[0].id);
    };

    getAsyncTemplates();
  }, []);

  const handleInputChange =
    (
      name:
        | "id"
        | "title"
        | "event"
        | "name"
        | "duration"
        | "role"
        | "date"
        | "template"
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (name === "id") return setId(value);
      if (name === "name") return setName(value);
      if (name === "title") return setTitle(value);
      if (name === "role") return setRole(value);
      if (name === "duration") return setDuration(value);
      if (name === "date") return setDate(value);
      if (name === "event") return setEvent(value);
      if (name === "template") return setTemplate(value);
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    try {
      const certificate: Certificate = {
        event,
        id,
        title,
        duration,
        name,
        role,
        date,
        template,
      };

      let response: string;
      if (isEditMode) {
        response = await handleEdit(certificate);
      } else {
        response = await handleAdd(certificate);
      }

      alert(response);

      onResetCertificate();
      onToggle();
    } catch (error) {
      alert(error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleAdd = async (certificate: Certificate) => {
    try {
      const response = await addCertificate(certificate);
      const message = `Sertifikat baru berhasil ditambahkan dengan ID ${response.data.certificate.id}`;

      return message;
    } catch (error) {
      throw new Error("Unknown error occured.");
    }
  };

  const handleEdit = async (certificate: Certificate) => {
    try {
      await editCertificate(certificate.id, certificate);
      return "Edit sertifikat berhasil";
    } catch (error) {
      throw new Error("Unknown error occured.");
    }
  };

  return (
    <Modal
      title={isEditMode ? "Ubah Sertifikat" : "Tambah Sertifikat"}
      onToggle={onToggle}
    >
      <form
        className="flex flex-col w-80"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="mt-2 mb-5">
          <Input
            id="id"
            label="Nomor Sertifikat"
            name="id"
            value={id}
            onChange={handleInputChange("id")}
            disabled={isEditMode}
            help="Bisa dikosongkan untuk auto-generate dari server."
          />
        </div>
        <div className="mt-2 mb-5">
          <Input
            id="name"
            label="Nama Peserta"
            name="name"
            value={name}
            onChange={handleInputChange("name")}
            required
          />
        </div>
        <div className="mt-2 mb-5">
          <Input
            id="title"
            label="Judul Kegiatan"
            name="title"
            value={title}
            onChange={handleInputChange("title")}
            required
          />
        </div>
        <div className="mt-2 mb-5">
          <Input
            id="role"
            label="Role (Peserta, Narasumber, Moderator)"
            name="role"
            value={role}
            onChange={handleInputChange("role")}
            required
          />
        </div>
        <div className="mt-2 mb-5">
          <Input
            id="duration"
            label="Durasi Kegiatan (120 menit)"
            name="duration"
            value={duration}
            onChange={handleInputChange("duration")}
            required
          />
        </div>
        <div className="mt-2 mb-5">
          <Input
            id="date"
            label="Tanggal Sertifikat"
            name="date"
            type="date"
            value={date}
            onChange={handleInputChange("date")}
            required
          />
        </div>
        <div className="mt-2 mb-5">
          <Input
            id="event"
            label="Kegiatan Expo"
            name="event"
            value={event}
            onChange={handleInputChange("event")}
            required
          />
        </div>
        <div className="mt-2 mb-5">
          <Select
            id="template"
            name="template"
            label="Template Sertifikat"
            value={template}
            onChange={handleInputChange("template")}
          >
            {templates.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        </div>

        <Button isLoading={isSubmitLoading}>
          <Icon icon="save" className="mr-3" />
          Simpan
        </Button>
      </form>
    </Modal>
  );
}
