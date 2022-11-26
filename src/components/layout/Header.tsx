// Assets
import logo from "../../assets/logo.png";

export default function Header(): JSX.Element {
  return (
    <header className="pt-5 container">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6 ">
        <div className="col-start-2 col-span-2 md:col-start-3 flex justify-center md:h-20 2xl:h-40">
          <a href="https://profesikeuanganexpo.id" target="_blank">
            <img
              src={logo}
              className="max-h-full"
              alt="Profesi Keuangan Expo"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
