import { FormEvent } from "react";

// Components
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

interface Props {
  onToggle: Function;
}

export default function ModalBatchAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted");
  };

  return (
    <Modal title="Batch Add Certificate" onToggle={onToggle}>
      <form onSubmit={handleSubmit}>
        <Input type="file" id="file" label="File" name="file" required />

        <Button>Submit</Button>
      </form>
    </Modal>
  );
}
