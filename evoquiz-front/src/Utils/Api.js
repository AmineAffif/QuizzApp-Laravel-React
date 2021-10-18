import axios from "axios";

const LOCALURL = "http://127.0.0.1:3000/";
const DEVURL = "http://127.0.0.1:3000/";
const PRODURL = "http://127.0.0.1:3000/";
export const URL = LOCALURL;

export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 8000,
  responseType: "json",
  headers: { "X-Custom-Header": "foobar" },
});

export default function RequestAPI(method = "POST", url = "/api", data = []) {
  return axios({
    method: method,
    url: URL + url,
    data: data,
    responseType: "json",
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
