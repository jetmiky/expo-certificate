// Components
import Modal from "../../../components/Modal";

interface Props {
  onToggle: Function;
}

export default function ModalSearch(props: Props): JSX.Element {
  const { onToggle } = props;

  return (
    <Modal title="Search Certificate" onToggle={onToggle}>
      <h3>Modal Search Certificate</h3>
    </Modal>
  );
}
