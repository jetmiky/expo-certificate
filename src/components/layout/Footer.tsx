// Configs
import social from "../../config/social";

// Components
import SocialLink from "../SocialLink";

export default function Footer(): JSX.Element {
  return (
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
  );
}
