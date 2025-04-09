import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const SocialLogin = () => {
  const {singWithGoogle}=useContext(AuthContext)

  const handleSingWithGoogle = ()=>{

    singWithGoogle()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }
  return (
    <div className="m-4 mx-auto">
      <div className="divider">OR</div>
      <button onClick={handleSingWithGoogle} className="btn">Google</button>
    </div>
  );
};

export default SocialLogin;