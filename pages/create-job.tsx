import { useState } from "react";
import DatePicker from "react-datepicker";

function CreateJob() {
  const [startDate, setStartDate] = useState(new Date());
  const [type, setType] = useState<string>();

  return (
    <div className="px-4 grid grid-cols-2 gap-4">
      <div className="dropdown col-span-2 ">
        <label tabIndex={0} className="btn m-1 w-full">
          {!type ? "Select job type" : type}
        </label>
        <ul
          tabIndex={0}
          className="bg-base-200 dropdown-content w-full menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {["Job 1", "Job 2"].map((job) => (
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
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="d/MM/yyyy hh:mmaa"
        />
      </div>

      <button className="btn mt-10 col-span-2">preview</button>

      <button className="btn col-span-2">create</button>
    </div>
  );
}

export default CreateJob;
