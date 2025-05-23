import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const useAxiosSecure = () => {

  const { singOutUser } = useAuth();
  
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(response => {
      return response;
    }, error => {

      console.log('error caught in Interceptors', error);

      if (error.status === 401 || error.status === 403) {
        console.log('Need to LogOut');
        singOutUser()
          .then(() => {
            console.log('logged out');
           navigate('/signIn');
          })
          .catch(error => console.log(error))
      }
      return Promise.reject(error);
    })
  }, [])


  return axiosInstance;
};

export default useAxiosSecure;