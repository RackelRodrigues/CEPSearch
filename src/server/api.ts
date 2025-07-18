import axios from "axios";

const api = axios.create({
  baseURL: "https://api.opencagedata.com/geocode/v1/json",
  params: {
    key: "980d7565ae984e0ca8df3607f5b9fae6",

    countrycode: "br",
    limit: 1,
  },
});

export default api;
