import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

interface Props {
  icon: IconName;
  hoverColor: "red" | "indigo";
  url: string;
}

export default function SocialLink({
  url,
  icon,
  hoverColor,
}: Props): JSX.Element {
  const classes =
    hoverColor === "red"
      ? "hover:text-red-900"
      : hoverColor === "indigo"
      ? "hover:text-indigo-900"
      : "";

  return (
    <a
      href={url}
      className={`${classes} text-gray-500 transition-color duration-300`}
      target="_blank"
    >
      <FontAwesomeIcon icon={["fab", icon]} size="lg" />
    </a>
  );
}
