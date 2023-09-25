import { ChangeEvent, FormEvent, useState, useEffect } from "react";

// APIs
import { addBatchCertificate, getTemplates } from "../../../api/certificate";

// Read Excel
import readXlsx, { Schema } from "read-excel-file";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Types
import Certificate from "../../../types/Certificate";
import Template from "../../../types/Template";

// Utils
import { handleDownloadTxt } from "../../../utils/blob";

interface Props {
  onToggle: Function;
}

export default function ModalBatchAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  const [templates, setTemplates] = useState<Template[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [template, setTemplate] = useState("");

  useEffect(() => {
    const getAsyncTemplates = async () => {
      const response = await getTemplates();
      setTemplates(response.data.templates);
      setTemplate(response.data.templates[0].id);
    };

    getAsyncTemplates();
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files) setFile(e.target.files[0]);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTemplate(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    try {
      if (!!file) {
        const schema: Schema = {
          EXPO: { prop: "event", type: String, required: true },
          "JUDUL KEGIATAN": { prop: "title", type: String, required: true },
          "DURASI KEGIATAN": { prop: "duration", type: String, required: true },
          NAMA: { prop: "name", type: String, required: true },
          ROLE: { prop: "role", type: String, required: true },
          "TANGGAL SERTIFIKAT": { prop: "date", type: String, required: true },
        };
        const readOptions = { sheet: 1, schema };

        const { rows, errors } = await readXlsx(file, readOptions);
        if (errors.length) {
          throw new Error("Error. Mohon cek kembali file Excel.");
        }

        const {
          data: { certificates },
        } = await addBatchCertificate(template, rows as Certificate[]);

        let logs = "";
        certificates.forEach((certificate) => {
          logs += `${certificate.id} - ${certificate.name} - ${certificate.title}\n`;
        });

        handleDownloadTxt(logs, "logs.txt");

        alert("Tambah multiple sertifikat selesai!");
        onToggle();
      } else {
        throw new Error("Pilih file terlebih dahulu!");
      }
    } catch (error: Error | any) {
      console.log(error);
      alert(error.message ? error.message : "Unexpected error");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleDownloadTemplate = () => {
    return window.open("/template-batch-upload.xlsx", "_blank");
  };

  return (
    <Modal title="Batch Add Certificate" onToggle={onToggle}>
      <div className="text-center">
        <p className="mb-2">Download template excel contoh berikut.</p>

        <Button theme="green" onClick={handleDownloadTemplate}>
          <Icon icon="file-excel" className="mr-3" />
          Download Template
        </Button>
      </div>

      <hr className="my-5" />

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Select
            id="template"
            name="template"
            label="Pilih Template Sertifikat"
            value={template}
            onChange={handleSelectChange}
          >
            {templates.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Input
            type="file"
            id="file"
            label="Data Sertifikat"
            name="file"
            onChange={handleFileChange}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            required
          />
          <p className="mt-1 text-sm italic">.XLSX (max 500 records)</p>
        </div>

        <div className="text-center">
          <Button isLoading={isSubmitLoading}>
            <Icon icon="cloud-upload-alt" className="mr-3" />
            Upload
          </Button>
        </div>
      </form>
    </Modal>
  );
}
