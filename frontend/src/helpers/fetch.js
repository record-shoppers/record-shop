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
    return res.data;
  } catch (err) {
    console.log("ERRORRRR", err.response);
    const errorMsg = err.response && err.response.data;
    return errorMsg || { error: "Wrong Username and Password" };
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

// Basket fetch request
export const placeOrder = async (record, id) => {
  try {
    const newRecord = await axios.post(`users/${id}/orders`, record);
    return newRecord;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getPreOrders = async (id) => {
  try {
    const preOrders = await axios.get(`/users/${id}/orders`);
    console.log("preOrders", preOrders);
    return preOrders.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const logoutUser = async () => {
  try {
    const logout = await axios.get("/logout");
    return logout;
  } catch (err) {
    console.log(err.response.data);
  }
};

// export const removeRecord = async (id) => {
//   try {
//     const removedRecord = await axios.delete(`me/basket`, id);
//     console.log("new record res =>", removedRecord);
//     return removedRecord;
//   } catch (err) {
//     console.log(err.response.data);
//   }
// };

// export const removeAll = async () => {
//   try {
//     const emptiedBasket = await axios.delete(`me/basket`);
//     console.log("new record res =>", emptiedBasket);
//     return emptiedBasket;
//   } catch (err) {
//     console.log(err.response.data);
//   }
// };
