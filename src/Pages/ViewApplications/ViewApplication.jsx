import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {

  const applications = useLoaderData();

  const handleStatusUpdate = (e,id) =>{
    console.log(e.target.value , id);
    const data = {
      status : e.target.value
    }
    fetch(`http://localhost:3000/job-applications/${id}`,{
      method : 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.modifiedCount){
                Swal.fire({
                  title: "Status Update successfully!",
                  icon: "success",
                  draggable: true
                });
                
              }
    })
    
  }
  return (
    <div>
      <h2 className="text-3xl">Application of this job : {applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Updated Status</th>

            </tr>
          </thead>
          <tbody>
            {
              applications.map((app, idx) => <tr key={app._id}>
                <th>{idx + 1}</th>
                <td>{app.application_email}</td>
                <td></td>
                <td>
                  <select 
                  onChange={(e)=>handleStatusUpdate(e,app._id)}
                  defaultValue={app.status || 'Change Status'}
                   className="select select-bordered select-sm w-full max-w-xs">
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>

              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;