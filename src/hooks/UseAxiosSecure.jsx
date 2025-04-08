import axios from "axios";
import { useEffect } from "react";


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});
const UseAxiosSecure = () => {
  useEffect(() => {
    axiosInstance.interceptors.response.use(response => {
      return response;
    }, error => {
      console.log('error caught in Interceptors', error);
      return Promise.reject(error);
    })
  }, [])
  return axiosInstance;
};

export default UseAxiosSecure;