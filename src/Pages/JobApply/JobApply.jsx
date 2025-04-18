import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const {id} = useParams();
  const{user} = useAuth();
  const navigate = useNavigate();
  //console.log(id,user);

  const submitApplication = e =>{
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    //console.log(linkedIn,github,resume);

    const jobApplication = {
        job_id : id,
        application_email : user.email,
        linkedIn,
        github,
        resume
    }

    fetch('http://localhost:3000/job-applications',{
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(jobApplication)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true
        });
        navigate('/myApplication');
      }
    })
    
  }
  
  return (
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center">Good Luck For Your Apply!</h1>
          <form onSubmit={submitApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL</span>
              </label>
              <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
  );
};

export default JobApply;