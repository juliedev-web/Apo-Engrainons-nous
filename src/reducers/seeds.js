// import

export const initialState = {
  list: [],
  category: [],
  seed: {},
  inputSearchValue: '',
  selectedCategoryIdFilter: '',
  selectedNewSeedCategory: '',
  totalSeedsNumber: 0,
  showMail: false,
  confirmDeleteSeedMsg: '',
  toBeDeletedSeedId: '',
  editSeed: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GETTING_LIST_SUCCESS':
      return {
        ...state,
        list: [...action.data.seed],
        totalSeedsNumber: action.data.nbSeed,
      };
    case 'ON_SUBMIT_SHARED_SEED_SUCCESS':
      return {
        ...state,
        selectedNewSeedCategory: '',
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

    case 'HIDE_MAIL':
      return {
        ...state,
        showMail: false,
      };

    case 'GETTING_CATEGORY_FILTERED_SUCCESS':
      return {
        ...state,
        list: [...action.data],
      };

    case 'GET_CATEGORY_FILTERED':
      return {
        ...state,
        selectedCategoryIdFilter: action.categoryId,
      };

    case 'SEARCH_CHANGE':
      return {
        ...state,
        inputSearchValue: action.inputValue,
      };

    case 'SELECT_CATEGORY_ID':
      return {
        ...state,
        selectedNewSeedCategory: action.categoryId,
      };

    case 'ON_TOGGLE_CLICK_MAIL_OWNER':
      return {
        ...state,
        showMail: true,
      };

    case 'ON_INPUT_SEARCH_SUCCESS':
      return {
        ...state,
        list: action.list,
      };

    case 'ON_TOGGLE_EDIT_SEED':
      return {
        ...state,
        editSeed: true,
      };

    case 'ON_DELETE_SEED_CLICK':
      return {
        ...state,
        confirmDeleteSeedMsg: 'Cliquez pour supprimer',
        toBeDeletedSeedId: action.seedId,
      };

    case 'ON_ClOSE_DELETE_CONFIRM_BUTTON':
      return {
        ...state,
        confirmDeleteSeedMsg: '',
        toBeDeletedSeedId: '',
      };

    default:
      return state;
  }
};

export default reducer;
