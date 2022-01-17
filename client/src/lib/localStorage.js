const saveToLocalStorage = (key, itemsToSet) =>
  localStorage.setItem(key, JSON.stringify(itemsToSet));

function loadFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error.message);
  }
}

export { saveToLocalStorage, loadFromLocalStorage };
