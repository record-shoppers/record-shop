// GENERAL LOCAL STORAGE HANDLERS
export const loadEntryFromStorage = (key) => {
  const userString = localStorage.getItem(key);
  // if item was found in localStorage => parse string into user object
  return userString && JSON.parse(userString);
};

export const setItemInStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const clearItemInStorage = (key) => {
  localStorage.removeItem(key);
};
