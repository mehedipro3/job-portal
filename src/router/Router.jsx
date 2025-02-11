import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/singIn/SingIn";


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