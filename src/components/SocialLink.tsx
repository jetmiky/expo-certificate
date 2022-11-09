import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

interface Props {
  icon: IconName;
  hoverColor: string;
  url: string;
}

export default function SocialLink({
  url,
  icon,
  hoverColor,
}: Props): JSX.Element {
  return (
    <a
      href={url}
      className={`text-gray-500 hover:text-${hoverColor}-900 transition-color duration-300`}
      target="_blank"
    >
      <FontAwesomeIcon icon={["fab", icon]} size="lg" />
    </a>
  );
}
