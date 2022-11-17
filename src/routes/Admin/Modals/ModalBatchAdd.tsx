import { ChangeEvent, FormEvent, useState } from "react";

// APIs
import { addCertificate } from "../../../api/certificate";

// Read Excel
import readXlsx, { Schema } from "read-excel-file";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Types
import Certificate from "../../../types/Certificate";

interface Props {
  onToggle: Function;
}

export default function ModalBatchAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    try {
      if (!!file) {
        const schema: Schema = {
          KEGIATAN: { prop: "event", type: String, required: true },
          "NOMOR SERTIFIKAT": { prop: "id", type: String, required: true },
          "JUDUL WEBINAR": { prop: "title", type: String, required: true },
          "DURASI WEBINAR": { prop: "duration", type: String, required: true },
          "NAMA PESERTA": { prop: "name", type: String, required: true },
        };
        const readOptions = { sheet: 1, schema };

        const { rows, errors } = await readXlsx(file, readOptions);
        if (errors.length) {
          throw new Error("Error found, please re-check Excel file.");
        }

        await addCertificate(rows as Certificate[]);

        alert("Add batch certificate success!");
        onToggle();
      } else {
        throw new Error("File is not selected yet!");
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
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="file"
            id="file"
            label="Data Sertifikat"
            name="file"
            onChange={handleFileChange}
            accept="application/vnd.openxmlformats-officedoc'ument.spreadsheetml.sheet"
            required
          />
          <p className="mt-1 text-sm italic">.XLSX (max 250 row)</p>
        </div>

        <div className="text-center">
          <Button isLoading={isSubmitLoading}>
            <Icon icon="cloud-upload-alt" className="mr-3" />
            Upload
          </Button>
        </div>
      </form>

      <hr className="my-5" />

      <div className="text-center">
        <p className="mb-2">Download template excel contoh berikut.</p>

        <Button theme="green" onClick={handleDownloadTemplate}>
          <Icon icon="file-excel" className="mr-3" />
          Download Template
        </Button>
      </div>
    </Modal>
  );
}
