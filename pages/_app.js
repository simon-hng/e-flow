import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="p-4">
        e-Flow
        <FontAwesomeIcon icon={faBolt} className="inline-block w-6 pl-2" />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
