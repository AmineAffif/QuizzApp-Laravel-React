import axios from "axios";

const LOCALURL = "https://morning-ravine-71079.herokuapp.com/";
const DEVURL = "https://morning-ravine-71079.herokuapp.com/";
const PRODURL = "https://morning-ravine-71079.herokuapp.com/";
export const URL = LOCALURL;

export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 8000,
  responseType: "json",
  headers: { "X-Custom-Header": "foobar" },
});

export default function RequestAPI(method = "POST", url = "", data = []) {
  return axios({
    method: method,
    url: URL + "api/" + url,
    data: data,
    responseType: "json",
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
