const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
};

const read = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

export { save, read };
