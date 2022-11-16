// Components
import Modal from "../Modal";
import Alert from "../Alert";

// Types
import Certificate, { instanceOfCertificate } from "../../types/Certificate";

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
          Sertifikat terdaftar di Profesi Keuangan Expo dengan data sebagai
          berikut.
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
          Nomor sertifikat tidak terdaftar di Profesi Keuangan Expo.
        </>
      )}
    </Modal>
  );
}
