export const initialState = {

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // lorsque je viens de déclencher la requête
    case 'GET_RECIPES':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default reducer;
