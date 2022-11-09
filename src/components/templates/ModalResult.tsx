// Components
import Modal from "../Modal";
import Alert from "../Alert";

interface Props {
  onToggle: Function;
  isSuccess: boolean;
}

export default function ModalResult({
  onToggle,
  isSuccess,
}: Props): JSX.Element {
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
                <td className="font-bold text-green-600">
                  PKE-PPPK/2022/98073/1/12986
                </td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>Bima Jatmiko Abadi</td>
              </tr>
              <tr>
                <td>Webinar</td>
                <td>:</td>
                <td>Digital Transaction vs Audit</td>
              </tr>
              <tr>
                <td>Durasi</td>
                <td>:</td>
                <td>120 menit</td>
              </tr>
              <tr>
                <td>Kegiatan</td>
                <td>:</td>
                <td>Profesi Keuangan Expo 2022</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <Alert type="secondary">Sertifikat tidak terdaftar</Alert>
          Nomor PKE-PPPK/2022/98073/1/12986 tidak terdaftar di Profesi Keuangan
          Expo.
        </>
      )}
    </Modal>
  );
}
