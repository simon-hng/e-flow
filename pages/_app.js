import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "/Users/kiapopat/e-flow/styles/globals.css";

import { Routes, Route } from "react-router-dom"
import Overview from '/Users/kiapopat/e-flow/pages/pages/overview.js';
import Run from '/Users/kiapopat/e-flow/pages/pages/runjobs.js';
import Schedule from '/Users/kiapopat/e-flow/pages/pages/schedulejobs.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">eFlow</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Overview</a></li>
      <li tabIndex={0}>
        <a>
          Jobs
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Run</a></li>
          <li><a>Schedule</a></li>
        </ul>
      </li>

    </ul>
  </div>
</div>
      <header className="p-4">
        <FontAwesomeIcon icon={faBolt} className="pl-2" />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
