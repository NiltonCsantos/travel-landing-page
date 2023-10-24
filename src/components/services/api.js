import axios from "axios";

const Api = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
});

export default Api;