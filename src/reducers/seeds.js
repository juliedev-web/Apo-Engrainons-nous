export const initialState = {
  list: [],
  category: [],
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
    default:
      return state;
  }
};

export default reducer;
