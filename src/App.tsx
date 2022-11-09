import { useState, FormEvent } from "react";

// Configs
import initializeIcon from "./config/icons";
import social from "./config/social";

// Components
import Input from "./components/Input";
import Button from "./components/Button";
import SocialLink from "./components/SocialLink";

// Templates
import ModalResult from "./components/templates/ModalResult";

// Assets
import logo from "./assets/logo.png";

initializeIcon();

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-between flex-col">
      <header className="pt-5 container">
        <div className="grid grid-cols-4 gap-2 md:grid-cols-6 ">
          <div className="col-start-2 col-span-2 md:col-start-3 flex justify-center h-20">
            <a href="https://profesikeuanganexpo.id" target="_blank">
              <img src={logo} className="h-full" alt="Profesi Keuangan Expo" />
            </a>
          </div>
        </div>
      </header>

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
              <Input id="certificate-code" label="Nomor Sertifikat" />
            </div>

            <div className="flex-center">
              <Button>Cek Sertifikat</Button>
            </div>
          </form>
        </div>
      </main>

      <footer className="container py-4 flex justify-between">
        <p className="text-sm text-gray-500">
          &copy; 2022 All rights reserved - Pusat Pembinaan Profesi Keuangan
        </p>

        <div className="flex mt-4 space-x-3 sm:justify-center sm:mt-0">
          <SocialLink url={social.youtube} icon="youtube" hoverColor="red" />
          <SocialLink
            url={social.instagram}
            icon="instagram"
            hoverColor="indigo"
          />
        </div>
      </footer>

      {showModal && <ModalResult onToggle={setShowModal} isSuccess={true} />}
    </div>
  );
}

export default App;
