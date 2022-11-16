// Components
import Modal from "../../../components/Modal";

interface Props {
  onToggle: Function;
}

export default function ModalAdd(props: Props): JSX.Element {
  const { onToggle } = props;

  return (
    <Modal title="Add Certificate" onToggle={onToggle}>
      <h3>Modal Add Certificate</h3>
    </Modal>
  );
}
