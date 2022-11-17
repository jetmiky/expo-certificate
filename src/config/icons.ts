import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCloudUploadAlt,
  faEdit,
  faFileExcel,
  faPlus,
  faSave,
  faSearch,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function initializeIcon() {
  return library.add(
    faInstagram,
    faYoutube,
    faCloudUploadAlt,
    faEdit,
    faFileExcel,
    faPlus,
    faSave,
    faSearch,
    faTrashAlt
  );
}
