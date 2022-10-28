import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faCalendar,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => (
  <div className="stats shadow bg-base-200 w-full">
    <div className="stat">
      <div className="stat-figure text-primary">
        <FontAwesomeIcon
          icon={faCalendar}
          className="inline-block w-8 h-8 stroke-current"
        />
      </div>
      <div className="stat-title">Scheduled jobs</div>
      <div className="stat-value">43</div>
      <div className="stat-desc">Jan 1st - Feb 5st</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-primary">
        <FontAwesomeIcon
          icon={faLeaf}
          className="inline-block w-8 h-8 stroke-current"
        />
      </div>
      <div className="stat-title">Co2 Emissions saved</div>
      <div className="stat-value">
        3982 m<sup>2</sup>
      </div>
      <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-primary">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="inline-block w-8 h-8 stroke-current"
        />
      </div>
      <div className="stat-title">Upcoming jobs</div>
      <div className="stat-value">23</div>
      <div className="stat-desc">in the next week</div>
    </div>
  </div>
);

export default Stats;
