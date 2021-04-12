exports.loadUserFromStorage = () => {
  const userString = localStorage.getItem("user");
  // if item was found in localStorage => parse string into user object
  return userString && JSON.parse(userString);
};

exports.setUserInStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

exports.clearUserInStorage = () => {
  localStorage.removeItem("user");
};
