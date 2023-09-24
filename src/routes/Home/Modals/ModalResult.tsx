import { useState } from "react";

// API
import { download } from "../../../api/certificate";

// Components
import Modal from "../../../components/Modal";
import Alert from "../../../components/Alert";
import Button from "../../../components/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Types
import Certificate, { instanceOfCertificate } from "../../../types/Certificate";

// Utils
import { handleDownloadBlob } from "../../../utils/blob";

interface Props {
  onToggle: Function;
  searchResult: Certificate | {};
}

export default function ModalResult({
  onToggle,
  searchResult,
}: Props): JSX.Element {
  const [isDownloadLoading, setIsDownloadLoading] = useState(false);
  const isSuccess = instanceOfCertificate(searchResult);

  const handleDownload = async () => {
    if (instanceOfCertificate(searchResult)) {
      try {
        setIsDownloadLoading(true);

        const { data } = await download(searchResult.id);
        handleDownloadBlob(data, searchResult.id);
      } catch (error: any) {
        alert("We are sorry, unexpected error happened.");
      } finally {
        setIsDownloadLoading(false);
      }
    }
  };

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
                <td
                  className="border rounded-tl-md rounded-tr-md border-slate-300 py-2 px-3 font-bold text-center text-green-600 bg-gray-100"
                  colSpan={2}
                >
                  {searchResult.event}
                </td>
              </tr>
              <tr>
                <td className="border border-t-0 border-slate-300 py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Nomor
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 py-2 px-3 leading-tight">
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
                  Kegiatan
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 py-2 px-3 leading-tight">
                  {searchResult.role + " " + searchResult.title}
                </td>
              </tr>
              <tr>
                <td className="border border-t-0 border-slate-300 rounded-bl-md py-2 pl-2 pr-5 font-bold bg-gray-50">
                  Durasi
                </td>
                <td className="border border-t-0 border-l-0 border-slate-300 rounded-br-md py-2 px-3 leading-tight">
                  {searchResult.duration}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-center">
            <Button
              theme="green"
              size="small"
              onClick={handleDownload}
              isLoading={isDownloadLoading}
            >
              <Icon icon="cloud-download-alt" className="mr-2"></Icon>
              Unduh Sertifikat
            </Button>
          </div>
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
