export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GETTING_LIST_SUCCESS':
      return {
        ...state,
        list: [...action.data],
      };

    default:
      return state;
  }
};

export default reducer;
