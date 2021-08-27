/**
 * function that takes in Date created_at in ISO format and convert it to dd/mm/yyyy
 *
 * @param {array} list of all seeds or filtered by categorie or by variety
 * @returns string in Date format dd/mm/yyyy
 */
export const formatDate = (dateISO) => {
  const date = new Date(dateISO);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
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
