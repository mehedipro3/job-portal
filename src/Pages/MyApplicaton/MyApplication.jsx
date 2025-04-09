import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/UseAxiosSecure";



const MyApplication = () => {
  
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setJobs(data);
    //   })

    //   axios.get(`http://localhost:3000/job-application?email=${user.email}`, { withCredentials: true })
    //     .then(res => setJobs(res.data))

    axiosSecure.get(`/job-application?email=${user.email}`)
      .then(res => setJobs(res.data));

  }, [user.email])



  return (
    <div className="py-7">
      <h2 className="text-3xl">Application : {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Application Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map(job => <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={job.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">{job.location}</span>
                </td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;