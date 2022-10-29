import React from "react";

const jobs = [
  {
    name: "Generate monthly report",
    start: 1666980834723,
    end: 1666980834723,
  },
  {
    name: "Archive data",
    start: 1666980834723,
    end: 1666980834723,
  },
  {
    name: "Generate monthly report",
    start: 1666980834723,
    end: 1666980834723,
  },
  {
    name: "Archive data",
    start: 1666980834723,
    end: 1666980834723,
  },
  {
    name: "Archive data",
    start: 1666980834723,
    end: 1666980834723,
  },
  {
    name: "Archive data",
    start: 1666980834723,
    end: 1666980834723,
  },
];

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Job name</th>
            <th>Status</th>
            <th>Date Completed</th>
            <th>Details</th>
          </tr>
        </thead>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Job Name</h3>
            <p> Job report info</p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>

        <tbody>
          {jobs.map((job, index) => (
            <tr key={index + job.name}>
              <td>{job.name}</td>
              <td>
                <progress
                  className="progress w-56"
                  value="100"
                  max="100"
                ></progress>
              </td>
              <td>21:18:28 28/10/2022</td>
              <td>
                <label htmlFor="my-modal-6" className="btn modal-button">
                  show details
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
