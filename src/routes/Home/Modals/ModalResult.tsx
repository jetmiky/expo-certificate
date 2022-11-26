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
          <p className="mt-2 mb-5 text-sm">
            <strong>Sertifikat terdaftar</strong> di Profesi Keuangan Expo,
            dengan data sebagai berikut.
          </p>
          <table className="table-auto border-separate border-spacing-0 w-full mt-2">
            <tbody>
              <tr>
                <td className="border border-slate-300 rounded-tl-md py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Nomor
                </td>
                <td className="border border-l-0 border-slate-300 rounded-tr-md py-2 px-3 font-bold text-green-600 leading-tight">
                  {searchResult.id}
                </td>
              </tr>
              <tr>
                <td className="border border-t-0 border-slate-300 py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Nama
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 py-2 px-3 leading-tight">
                  {searchResult.name}
                </td>
              </tr>
              <tr>
                <td className="border border-t-0 border-slate-300 py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Webinar
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 py-2 px-3 leading-tight">
                  {searchResult.title}
                </td>
              </tr>
              <tr>
                <td className="border border-t-0 border-slate-300 py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Durasi
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 py-2 px-3 leading-tight">
                  {searchResult.duration}
                </td>
              </tr>
              <tr>
                <td className="border border-t-0 border-slate-300 rounded-bl-md py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Kegiatan
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 rounded-br-md py-2 px-3 leading-tight">
                  {searchResult.event}
                </td>
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
          <p className="mt-2 text-sm">
            Sertifikat tidak terdaftar di basis data Profesi Keuangan Expo.
          </p>
        </>
      )}
    </Modal>
  );
}
