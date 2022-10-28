import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="platinion">
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            eFlow
            <FontAwesomeIcon icon={faBolt} className="inline-block h-4 pl-2" />
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/overview">Overview </Link>
          <Link href="/jobreport">Job Report</Link>
          <Link href="/runjobs">Run Job </Link>
          <Link href="/create-job" className="btn rounded-full">
            new job
            <FontAwesomeIcon icon={faPlus} className="inline-block h-4 ml-2" />
          </Link>
        </div>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
