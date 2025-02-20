import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/singIn/SingIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplicaton/MyApplication";
import AddJob from "../Pages/AddJobs/Addjob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <h2>Router Not Found</h2>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/jobs/:id",
        element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
        loader : ({params}) => fetch(`http://localhost:3000/job/${params.id}`)
      },
      {
        path:"/jobApply/:id",
        element: <PrivateRouter><JobApply></JobApply></PrivateRouter>,
      },
      {
        path:"/myApplication",
        element: <PrivateRouter><MyApplication></MyApplication></PrivateRouter>,
      },
      {
        path:"/addJob",
        element: <PrivateRouter><AddJob></AddJob></PrivateRouter>,
      },
      {
        path:"/myPostedJob",
        element: <PrivateRouter><MyPostedJob></MyPostedJob></PrivateRouter>,
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"singIn",
        element:<SingIn></SingIn>
      },
      
    ]
  },
]);

export default router;