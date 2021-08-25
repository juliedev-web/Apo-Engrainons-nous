/**
 * function that takes in Date created_at in ISO format and convert it to dd/mm/yyyy
 *
 * @param {array} list of all seeds or filtered by categorie or by variety
 * @returns string in Date format dd/mm/yyyy
 */
export const formatDate = (seed) => {
  const date = new Date(seed.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = `0${dt}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${dt}/${month}/${year}`;
};

/**
 *
 * @param {array} list of all seeds
 * @param {string} inputValue of the user from de input search filter
 * @returns array of filtered seed by variety
 */
export const filterByVariety = (seedList, inputValue) => (
  seedList.filter((seed) => seed.variety_name.toLowerCase().includes(inputValue.toLowerCase()))
);
