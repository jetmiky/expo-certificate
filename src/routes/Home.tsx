import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// APIs
import { AxiosError } from "axios";
import { search } from "../api/certificate";

// Router
import { useSearchParams } from "react-router-dom";

// Layouts
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Templates
import ModalResult from "./Home/Modals/ModalResult";

// Types
import Certificate from "../types/Certificate";

export default function Home(): JSX.Element {
  const [searchParams] = useSearchParams();
  const [certificateCode, setCertificateCode] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Certificate | {}>({});

  useEffect(() => {
    const code = searchParams.get("code");
    if (typeof code === "string") {
      setCertificateCode(code);
      handleSearch(code);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCertificateCode(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSearch(certificateCode);
  };

  const handleSearch = async (code: string) => {
    setIsLoading(true);

    try {
      const response = await search(code);
      const { certificate } = response.data;

      setSearchResult(certificate);
    } catch (error: AxiosError | any) {
      if (error.response && error.response.status === 404) {
        setSearchResult({});
      } else {
        alert("We are sorry, unexpected error happened.");
      }
    } finally {
      setShowModal(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-between flex-col">
      <Header />

      <main className="container pb-10">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 md:col-start-2 md:col-span-2">
            <h1 className="text-center mb-1">Cek Sertifikat</h1>
            <p className="text-center text-gray-400 px-10">
              Cek keaslian sertifikat webinar Profesi Keuangan Expo, dengan
              memasukkan nomor sertifikat pada isian berikut.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          <form
            className="col-start-2 col-span-2 md:col-start-3"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="pt-10 pb-5">
              <Input
                name="certificate-code"
                id="certificate-code"
                label="Nomor Sertifikat"
                value={certificateCode}
                onChange={handleInputChange}
                required={true}
              />
            </div>

            <div className="flex-center">
              <Button isLoading={isLoading}>
                <FontAwesomeIcon icon="search" className="mr-3" />
                Cek Sertifikat
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />

      {showModal && (
        <ModalResult onToggle={setShowModal} searchResult={searchResult} />
      )}
    </div>
  );
}
