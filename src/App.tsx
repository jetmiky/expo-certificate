// Configs
import initializeIcon from "./config/icons";
import social from "./config/social";

// Components
import Input from "./components/Input";
import Button from "./components/Button";
import SocialLink from "./components/SocialLink";

initializeIcon();

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-between flex-col">
      <header></header>

      <main className="container">
        <h1 className="text-center mb-1">Cek Sertifikat</h1>
        <p className="text-center text-gray-400 px-10">
          Cek keaslian sertifikat webinar Profesi Keuangan Expo
        </p>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          <form
            className="col-start-2 col-span-2 md:col-start-3"
            autoComplete="off"
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
    </div>
  );
}

export default App;
