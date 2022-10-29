import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import Preview from "../components/preview";

function CreateJob() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [type, setType] = useState<string>();
  const [repeat, setRepeat] = useState<string>("no repeat");

  const [previewData, setPreviewData] = useState();

  useEffect(() => {
    const requestParams = `start=${startDate.getTime()}&end=${endDate.getTime()}`;
    fetch(
      `https://ye5nfxxk3l6fzvvlpcboyxmspi0mokin.lambda-url.eu-central-1.on.aws/?${requestParams}`
    )
      .then((res) => res.json())
      .then((data) => setPreviewData(data));
  }, [startDate, endDate]);

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold pb-4">Create job</h1>

      <div className="flex flex-col lg:flex-row-reverse gap-4">
        <div className="w-full col-span-2 h-80 lg:w-2/4">
          <Preview data={previewData} />
        </div>

        <div className="grid grid-cols-2 gap-2 w-full lg:w-2/4">
          <div className="dropdown col-span-2">
            <label tabIndex={0} className="btn m-1 w-full">
              {!type ? "Select job" : type}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="inline-block pl-2 h-4"
              />
            </label>

            <ul
              tabIndex={0}
              className="bg-base-200 dropdown-content menu p-2 rounded-box w-full"
            >
              {[
                "Generate monthly report",
                "Generate yearly report",
                "Archive data",
                "Train ML model purple unicorn",
              ].map((job) => (
                <li key={job}>
                  <a onClick={() => setType(job)}>{job}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <label htmlFor="" className="label">
              Earliest starting time
            </label>
            <DatePicker
              className="input input-bordered w-full"
              showTimeSelect
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="d/MM/yyyy hh:mmaa"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="" className="label">
              Execute until
            </label>
            <DatePicker
              className="input input-bordered w-full"
              showTimeSelect
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="d/MM/yyyy hh:mmaa"
            />
          </div>

          <div className="dropdown col-span-2">
            <label tabIndex={0} className="btn m-1 w-full">
              {repeat}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="inline-block pl-2 h-4"
              />
            </label>

            <ul
              tabIndex={0}
              className="bg-base-200 dropdown-content menu p-2 rounded-box w-full"
            >
              {[
                "no repeat",
                "repeat daily",
                "repeat weekly",
                "repeat monthy",
                "repeat yearly",
              ].map((repeat) => (
                <li key={repeat}>
                  <a onClick={() => setRepeat(repeat)}>{repeat}</a>
                </li>
              ))}
            </ul>
          </div>

          <button className="btn col-span-2 bg-primary text-neutral hover:bg-primary">
            create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
