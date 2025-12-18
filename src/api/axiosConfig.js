import axios from "axios";

// In dev: use Vite proxy (/api)
// In prod: use VITE_API_URL from env
const baseURL = import.meta.env.DEV
  ? ""
  : import.meta.env.VITE_API_URL;

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default axios;
