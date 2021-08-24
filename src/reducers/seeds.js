// import
import { filterByVariety } from '../selectors/seeds';

export const initialState = {
  list: [],
  listFiltered: [],
  category: [],
  seed: {},
  selectedValue: '',
  categoryName: 'Catégories',
  inputSearchValue: '',
  selectedCategoryId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GETTING_LIST_SUCCESS':
      return {
        ...state,
        list: [...action.data],
        listFiltered: [...action.data],
      };

    case 'GETTING_CATEGORY_SUCCESS':
      return {
        ...state,
        category: [...action.data],
      };

    case 'GETTING_ONE_SEED_SUCCESS':
      return {
        ...state,
        seed: {
          ...action.data,
        },
      };

    case 'GETTING_CATEGORY_FILTERED_SUCCESS':
      return {
        ...state,
        listFiltered: [...action.data],
      };

    case 'GET_CATEGORY_FILTERED':
      return {
        ...state,
        categoryName: state.category.find((cat) => cat.id === +action.categoryId).name,
        selectedCategoryId: action.categoryId,
      };
    case 'SEARCH_CHANGE':
      return {
        ...state,
        inputSearchValue: action.inputValue,
      };
    case 'ON_SEARCH_SUBMIT':
      return {
        ...state,
        listFiltered: [...filterByVariety(state.list, state.inputSearchValue)],
      };
    case 'ON_SUBMIT_SHARED_SEED_SUCCESS':
      return {
        ...state,
        selectedCategoryId: '',
      };

    default:
      return state;
  }
};

export default reducer;
