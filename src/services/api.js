import axios from "axios";
import { BASIC_URL } from "../constants/constants";

const instance = axios.create({
  baseURL: BASIC_URL,
});

const getFulltextURL = (url, data) => {
  return instance.getUri({
    url: url,
    params: { ...data },
  });
};

const authConfig = (data) => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      link: `${data.params}`,
    },
  };
};

const statisticsConfig = (data) => {
  if (data.params) {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        order: data.params ? `${data.params}` : "asc_target",
        offset: 0,
        limit: 0,
      },
    };
  } else {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        offset: 0,
        limit: 0,
      },
    };
  }
};

const shortenerAPI = {
  register(data) {
    const uri = getFulltextURL("register", data);
    return instance.post(uri);
  },
  login(data) {
    return instance.post(
      `login`,
      `username=${data.username}&password=${data.password}`
    );
  },
  squeeze(data) {
    return instance.post(`squeeze`, {}, authConfig(data));
  },
  statistics(data) {
    return instance.get(`statistics`, statisticsConfig(data));
  },
};

export { shortenerAPI };
