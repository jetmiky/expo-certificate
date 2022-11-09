import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function initializeIcon() {
  return library.add(faInstagram, faYoutube);
}
