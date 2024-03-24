export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const removeDataFromLocalStorage = (key) => localStorage.removeItem(key);
