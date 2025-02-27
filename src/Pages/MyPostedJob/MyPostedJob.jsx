import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";


const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/job?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [user.email])
  return (
    <div>
      <h3 className="text-5xl">My Posted Job : {jobs.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Application Deadline</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map((job ,idx) =><tr key={idx}>
                  <th>{idx+1}</th>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Application</button>
                    </Link>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;