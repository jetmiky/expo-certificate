// Components
import Modal from "../../../components/Modal";
import Alert from "../../../components/Alert";

// Types
import Certificate, { instanceOfCertificate } from "../../../types/Certificate";

interface Props {
  onToggle: Function;
  searchResult: Certificate | {};
}

export default function ModalResult({
  onToggle,
  searchResult,
}: Props): JSX.Element {
  const isSuccess = instanceOfCertificate(searchResult);

  return (
    <Modal onToggle={onToggle} title="Cek Sertifikat">
      {isSuccess ? (
        <>
          <Alert type="primary">Sertifikat terdaftar</Alert>
          <p className="mt-2">
            <strong>Sertifikat terdaftar</strong> di Profesi Keuangan Expo,
            dengan data sebagai berikut.
          </p>
          <table className="w-full mt-2">
            <tbody>
              <tr>
                <td>Nomor</td>
                <td>:</td>
                <td className="font-bold text-green-600">{searchResult.id}</td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>{searchResult.name}</td>
              </tr>
              <tr>
                <td>Webinar</td>
                <td>:</td>
                <td>{searchResult.title}</td>
              </tr>
              <tr>
                <td>Durasi</td>
                <td>:</td>
                <td>{searchResult.duration}</td>
              </tr>
              <tr>
                <td>Kegiatan</td>
                <td>:</td>
                <td>{searchResult.event}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <Alert type="secondary">Sertifikat tidak terdaftar</Alert>
          <p className="mt-2">
            Sertifikat tidak terdaftar di basis data Profesi Keuangan Expo.
          </p>
        </>
      )}
    </Modal>
  );
}
