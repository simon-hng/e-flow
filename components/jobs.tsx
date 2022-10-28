const jobs = [
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

const Jobs = () => (
  <div className="my-8">
    <h1 className="text-2xl font-bold pb-4">Scheduled jobs</h1>

    <table className="table bg-base-200 w-full">
      <thead>
        <tr>
          <th></th>
          <th>Job</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index + job.name}>
            <th>{index}</th>
            <td>{job.name}</td>
            <td>{new Date(job.start).toDateString()}</td>
            <td>{new Date(job.end).toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Jobs;
