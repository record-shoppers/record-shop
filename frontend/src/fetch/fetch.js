import axios from "axios";

const URI = "http://localhost:5001";

export const GetRecord = async () => {
  try {
    const data = await axios.get(`${URI}/records`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetUser = async (data) => {
  try {
    const res = await axios.post(`${URI}/login`, data);
    console.log("get user res =>", res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (formData) => {
  try {
    const newUser = await axios.post(`${URI}/users`, formData);
    console.log("new user res =>", newUser);
    return newUser;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateAvatar = async (id, avatar) => {
  try {
    const avatarUpdated = await axios.put(`${URI}/users/${id}`, avatar);
    return avatarUpdated;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateInformation = async (id, information) => {
  try {
    const informationUpdated = await axios.put(
      `${URI}/users/${id}`,
      information
    );
    console.log("get user res =>", informationUpdated);
    return informationUpdated;
  } catch (err) {
    console.log(err.response.data);
  }
};
