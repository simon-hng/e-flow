import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="p-4">
        e-Flow
        <FontAwesomeIcon icon={faWind} className="pl-2" />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
