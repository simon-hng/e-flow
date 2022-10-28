import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            eFlow
            <FontAwesomeIcon icon={faBolt} className="inline-block w-6 pl-2" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Overview</a>
            </li>
            <li tabIndex={0}>
              <a>
                Jobs
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Run</a>
                </li>
                <li>
                  <a>Schedule</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
