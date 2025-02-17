

const Addjob = () => {

  const handleAddJob = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const {min,max,currency, ...newJob} = initialData;
    console.log(newJob);
    newJob.salaryRange = {min,max,currency};
    console.log(newJob);
    
  }
  return (
    <div>
      <h2 className="text-3xl font-bold">Post a New Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Job Title</span>
          </label>
          <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Company Name</span>
          </label>
          <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Job Location</span>
          </label>
          <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Job Type</span>
          </label>
          <select name="jobType" className="select select-ghost ">
            <option disabled selected >Pick a Job Type</option>
            <option>Full Time</option>
            <option>part Time</option>
            <option>Intern</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Job Field</span>
          </label>
          <select name="field" className="select select-ghost">
            <option disabled selected>Pick a Job Field</option>
            <option>Marketing</option>
            <option>Management</option>
            <option>Engineering</option>
            <option>Finance</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Salary Range</span>
            </label>
            <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <select name="currency" className="select select-ghost">
              <option  disabled selected>Pick a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>IND</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Job Description</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Job Description" name="description"></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Company Logo URL</span>
          </label>
          <input type="text" name="logo" placeholder="Logo URL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addjob;