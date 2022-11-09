// Configs
import initializeIcon from "./config/icons";

// Components
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Input from "./components/Input";
import Button from "./components/Button";

initializeIcon();

function App() {
  return (
    <main className="min-h-screen w-full flex-center flex-col">
      <div className="container">
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
      </div>
    </main>
  );
}

export default App;
