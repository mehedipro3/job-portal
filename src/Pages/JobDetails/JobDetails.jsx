import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  return (
    <div>
    <div className='space-y-3 p-16 pb-40 text-white'>
      <h3 className='text-4xl text-center font-bold'>Job Details</h3>
      <p className='text-center'>In various regions, many people suffer from injuries, often requiring immediate medical attention and long-term support. <br /> Injuries can range from fractures and gunshot wounds to amputations and surgeries.</p>
    </div>
    <div className='flex gap-3 border rounded-2xl pt-32 container mx-auto relative -top-36'>
      <div className='ml-32'>
        <img className='w-[350px]' src={data.company_logo} alt={data.title} />
      </div>
      <div className='ml-40 space-y-3 pb-7'>
        <h3 className='text-3xl font-bold'>Name : {data.title}</h3>
        <p className='text-xl font-bold'>Location : {data.location}</p>
        <p className='text-xl font-bold'>Category : {data.category}</p>
        <p className='text-xl font-bold'>Company : {data.company}</p>
        <p className='text-xl font-bold'>Application Deadline : {data.applicationDeadline}</p>
        <p className='text-xl font-bold'>Description : {data.description}</p>
        <button className="btn bg-blue-400 text-white font-bold ">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;