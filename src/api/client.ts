import axios from "axios";
const BASEURL = "https://clinicaltrials.gov/api/v2";

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});
