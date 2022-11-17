import { ChangeEvent, FormEvent, useState } from "react";

// Read Excel
import readXlsx from "read-excel-file";

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

    console.log("Submitted", file);
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
