import { useState } from "react";
import DatePicker from "react-datepicker";
import Preview from "../components/preview";

function CreateJob() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [type, setType] = useState<string>();

  return (
    <div className="flex flex-col px-4 lg:flex-row-reverse gap-4">
      <div className="w-full col-span-2 h-64 lg:w-2/4">
        <Preview />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:w-2/4">
        <div className="dropdown col-span-2 ">
          <label tabIndex={0} className="btn m-1 w-full">
            {!type ? "Select job type" : type}
          </label>
          <ul
            tabIndex={0}
            className="bg-base-200 dropdown-content w-full menu p-2 shadow bg-base-100 rounded-box w-52"
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
            Start
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
            End
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

        <button className="btn col-span-2">create</button>
      </div>
    </div>
  );
}

export default CreateJob;
