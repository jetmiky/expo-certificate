import { ChangeEvent, FormEvent, useState } from "react";

// Read Excel
import readXlsx, { Schema } from "read-excel-file";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

interface Props {
  onToggle: Function;
}

export default function ModalBatchAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

        console.log(rows);
      } else {
        throw new Error("File is not selected yet!");
      }
    } catch (error: Error | any) {
      console.log(error);
      alert(error.message ? error.message : "Unexpected error");
    }
  };

  return (
    <Modal title="Batch Add Certificate" onToggle={onToggle}>
      <form onSubmit={handleSubmit}>
        <Input
          type="file"
          id="file"
          label="File"
          name="file"
          onChange={handleFileChange}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          required
        />

        <Button>Submit</Button>
      </form>
    </Modal>
  );
}
