import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>User</th>
            <th>Job</th>
            <th>Status</th>
            <th>Date Completed</th>
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
          <tr>
            <td>Cy Ganderton</td>
            <label htmlFor="my-modal-6" className="btn modal-button">
              Job 1 name
            </label>
            <td>
              <progress
                className="progress w-56"
                value="100"
                max="100"
              ></progress>
            </td>
            <td>21:18:28 28/10/2022</td>
          </tr>
          <tr className="hover">
            <td>Hart Hagerty</td>
            <label htmlFor="my-modal-6" className="btn modal-button">
              Job 2 name
            </label>
            <td>
              <progress
                className="progress w-56"
                value="80"
                max="100"
              ></progress>
            </td>
            <td>{/* date */}</td>
          </tr>
          <tr>
            <td>Brice Swyre</td>
            <label htmlFor="my-modal-6" className="btn modal-button">
              Job 3 name
            </label>
            <td>
              <progress
                className="progress w-56"
                value="40"
                max="100"
              ></progress>
            </td>
            <td>{/* date */}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
