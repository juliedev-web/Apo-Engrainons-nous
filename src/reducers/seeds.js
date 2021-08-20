export const initialState = {
  list: [],
  category: [],
  selectedValue: '',
  categoryName: 'Catégories',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GETTING_LIST_SUCCESS':
      return {
        ...state,
        list: [...action.data],
      };
    case 'GETTING_CATEGORY_SUCCESS':
      return {
        ...state,
        category: [...action.data],
      };
    case 'GETTING_CATEGORY_FILTERED_SUCCESS':
      return {
        ...state,
        list: [...action.data],
      };
    case 'GET_CATEGORY_FILTERED':
      console.log(action);
      return {
        ...state,
        categoryName: state.category.find((cat) => cat.id === +action.categoryId).name,
      };
    default:
      return state;
  }
};

export default reducer;
