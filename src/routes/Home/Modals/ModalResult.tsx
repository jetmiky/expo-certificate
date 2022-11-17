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
          <Alert type="primary">
            <svg
              className="mark check inline w-8 h-8 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="mark__circle check"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="mark__path"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            Sertifikat terdaftar
          </Alert>
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
          <Alert type="secondary">
            <svg
              className="mark cross inline w-8 h-8 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="mark__circle cross"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="mark__path cross__path--right"
                fill="none"
                d="M16,16 l20,20"
              />
              <path
                className="mark__path cross__path--left"
                fill="none"
                d="M16,36 l20,-20"
              />
            </svg>
            Sertifikat tidak terdaftar
          </Alert>
          <p className="mt-2">
            Sertifikat tidak terdaftar di basis data Profesi Keuangan Expo.
          </p>
        </>
      )}
    </Modal>
  );
}
