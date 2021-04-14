import axios from "axios";
axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || `http://localhost:5001`; // set our API server url
axios.defaults.withCredentials = true;

export const GetRecord = async () => {
  try {
    const data = await axios.get(`/records`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetUser = async (data) => {
  try {
    const res = await axios.post(`/login`, data);
    console.log("get user res =>", res);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addUser = async (formData) => {
  try {
    const newUser = await axios.post(`/users`, formData);
    console.log("new user res =>", newUser);
    return newUser;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateAvatar = async (id, avatar) => {
  try {
    const avatarUpdated = await axios.put(`/users/${id}`, avatar);
    return avatarUpdated;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateInformation = async (id, information) => {
  try {
    const informationUpdated = await axios.put(`/users/${id}`, information);
    console.log("get user res =>", informationUpdated);
    return informationUpdated;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const authenticateUser = async () => {
  try {
    const response = await axios.post(`/me/auth`);
    return response.data;
  } catch (err) {
    let error = "eroooorororororo";
    console.log(error);
    return error;
  }
};
