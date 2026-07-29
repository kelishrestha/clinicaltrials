import axios from "axios";
const BASEURL = "https://clinicaltrials.gov/api/v2";

export const apiClient = axios.create({
  baseURL: BASEURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
