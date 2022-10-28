import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function Schedule({ Component, pageProps }) {
  return (
    <>
      <header className="p-4">
        e-Flow
        <FontAwesomeIcon icon={faBolt} className="pl-2" />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default Schedule;
