import Lottie from "lottie-react";
import SingInLottieData from "../../assets/SingIn.json"
import { useContext } from "react";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
const SingIn = () => {
  const { singInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const from = location.state || '/';


  const handleSingIn = e => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singInUser(email, password)
      .then(result => {
        console.log('sing in : ',result.user.email)
        const user = { email: result.user.email };

        axios.post('http://localhost:3000/jwt', user , {withCredentials : true})
          .then(res => {
            console.log(res.data);
          })
      navigate(from); 
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={SingInLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSingIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SingIn;