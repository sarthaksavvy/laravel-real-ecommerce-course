import axios from "axios";

const setAxios = token => {
  axios.defaults.baseURL = process.env.API_URL;
  axios.defaults.headers["Accept"] = `application/json`;
  axios.defaults.headers["Content-Type"] = `application/json`;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common = {};
  }
};
export default setAxios;
