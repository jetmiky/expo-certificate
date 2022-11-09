import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function initializeIcon() {
  return library.add(faFacebook);
}
