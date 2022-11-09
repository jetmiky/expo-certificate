import { useState, FormEvent, ChangeEvent } from "react";

// Configs
import initializeIcon from "./config/icons";

// APIs
import { search } from "./api/search";

// Layouts
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Components
import Input from "./components/Input";
import Button from "./components/Button";

// Templates
import ModalResult from "./components/templates/ModalResult";

initializeIcon();

function App() {
  const [certificateCode, setCertificateCode] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCertificateCode(e.target.value);
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await search(200);
      if (response.status !== 200 && response.status !== 404) {
        throw Error("Server error.");
      }

      const searchResult = await response.json();

      setSearchResult(searchResult);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      alert("We are sorry, unexpected error happened.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-between flex-col">
      <Header />

      <main className="container pb-10">
        <h1 className="text-center mb-1">Cek Sertifikat</h1>
        <p className="text-center text-gray-400 px-10">
          Cek keaslian sertifikat webinar Profesi Keuangan Expo
        </p>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          <form
            className="col-start-2 col-span-2 md:col-start-3"
            autoComplete="off"
            onSubmit={handleSearch}
          >
            <div className="pt-8 pb-5">
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
              <Button isLoading={isLoading}>Cek Sertifikat</Button>
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

export default App;
