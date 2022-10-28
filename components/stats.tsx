import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faIndustry, faSun } from "@fortawesome/free-solid-svg-icons";

const Stats = () => (
  <div className="stats shadow bg-base-200 w-full">
    <div className="stat">
      <div className="stat-figure text-primary">
        <FontAwesomeIcon
          icon={faBolt}
          className="inline-block w-8 h-8 stroke-current"
        />
      </div>
      <div className="stat-title">Downloads</div>
      <div className="stat-value">31K</div>
      <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-primary">
        <FontAwesomeIcon
          icon={faSun}
          className="inline-block w-8 h-8 stroke-current"
        />
      </div>
      <div className="stat-title">New Users</div>
      <div className="stat-value">4,200</div>
      <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-primary">
        <FontAwesomeIcon
          icon={faIndustry}
          className="inline-block w-8 h-8 stroke-current"
        />
      </div>
      <div className="stat-title">New Registers</div>
      <div className="stat-value">1,200</div>
      <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
  </div>
);

export default Stats;
