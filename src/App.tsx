// Components
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main className="min-h-screen w-full flex-center flex-col">
      <h1 className="text-center">Cek Sertifikat</h1>
      <p className="text-center text-gray-400">
        Cek keaslian sertifikat webinar Profesi Keuangan Expo
      </p>

      <form>
        <label htmlFor="certificateCode">Nomor Sertifikat</label>
        <input id="certificateCode" name="certificateCode" type="text" />

        <Input id="certificate-code" label="Nomor Sertifikat" />

        <Button>Cek Sertifikat</Button>
      </form>
    </main>
  );
}

export default App;
