// Components
import Modal from "../../../components/Modal";

interface Props {
  onToggle: Function;
}

export default function ModalBatchAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  return (
    <Modal title="Batch Add Certificate" onToggle={onToggle}>
      <h3>Modal Batch Add Certificate</h3>
    </Modal>
  );
}
