// export function findSeed(recipes, searchedSlug) {
//   const recipe = recipes.find((testedRecipe) => {
//     return testedRecipe.slug === searchedSlug;
//   });
//   return recipe;
// }
export function filterByVariety(seedList, inputValue) {
  console.log(seedList);
  console.log(inputValue);
  return seedList.filter((element) => element.variety_name.toLowerCase().includes(inputValue.toLowerCase()));
}
