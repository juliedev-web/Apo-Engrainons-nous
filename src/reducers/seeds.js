// import

export const initialState = {
  list: [],
  totalSeedsNumber: 0,
  category: [],
  seed: {},
  inputSearchValue: '',
  selectedCategoryIdFilter: '',
  selectedNewSeedCategory: '',
  showMail: false,
  confirmDeleteSeedMsg: '',
  toBeDeletedSeedId: '',
  editSeed: false,
  createSeedConfirmMsg: '',
  getFromList: '',
  varietyInputValueEdit: '',
  textAreaDetailValueEdit: '',
  textAreaAdviceValueEdit: '',
  categorySeedValueEdit: '',
  copyMailToClipBoardMsg: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CLEAR_MSG_COPIED':
      return {
        ...state,
        copyMailToClipBoardMsg: '',
      };

    case 'EMAIL_COPY_TO_CLIPBOARD':
      return {
        ...state,
        copyMailToClipBoardMsg: 'le mail a été copié dans le presse-papier',
      };

    case 'GETTING_LIST_SUCCESS':
      return {
        ...state,
        list: [...action.data.seed],
        totalSeedsNumber: action.data.nbSeed,
        getFromList: action.from,
      };

    case 'ON_SUBMIT_SHARED_SEED_SUCCESS':
      return {
        ...state,
        createSeedConfirmMsg: action.msg,
      };

    case 'GETTING_CATEGORY_SUCCESS':
      return {
        ...state,
        category: [...action.data],
      };
    case 'ON_EDIT_SEED_FORM_CHANGE':
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };

    case 'GETTING_ONE_SEED_SUCCESS':
      return {
        ...state,
        seed: {
          ...action.data,
        },
      };
    case 'DEFAULT_EDIT_SEED_VALUE':
      return {
        ...state,
        varietyInputValueEdit: state.seed.variety_name,
        textAreaDetailValueEdit: state.seed.description,
        textAreaAdviceValueEdit: state.seed.conseil,
        categorySeedValueEdit: state.seed.category_id,
      };

    case 'HIDE_MAIL':
      return {
        ...state,
        showMail: false,
      };

    case 'GETTING_CATEGORY_FILTERED_SUCCESS':
      return {
        ...state,
        list: [...action.data.seed],
        totalSeedsNumber: action.data.nbSeed,
        getFromList: action.from,
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

    case 'SELECT_CATEGORY_ID_EDIT':
      return {
        ...state,
        categorySeedValueEdit: action.categoryId,
      };

    case 'ON_TOGGLE_CLICK_MAIL_OWNER':
      return {
        ...state,
        showMail: true,
      };

    case 'ON_INPUT_SEARCH_SUCCESS':
      if (action.slug) {
        return {
          ...state,
          list: [...action.data.resul],
          totalSeedsNumber: action.data.nbSeed,
          getFromList: action.from,
          inputSearchValue: action.slug,
        };
      }
      return {
        ...state,
        list: [...action.data.resul],
        totalSeedsNumber: action.data.nbSeed,
        getFromList: action.from,
      };

    case 'ON_TOGGLE_EDIT_SEED':
      return {
        ...state,
        editSeed: true,
      };

    case 'CLOSE_EDIT_SEED':
      return {
        ...state,
        editSeed: false,
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

    case 'ON_CLICK_RESET_FILTER':
      return {
        ...state,
        selectedCategoryIdFilter: 'categories',
        inputSearchValue: '',
      };

    case 'CLOSE_CREATE_SEED_CONFIRM_MSG':
      return {
        ...state,
        createSeedConfirmMsg: '',
      };

    case 'ON_SUBMIT_SHARED_SEED_FAIL':
      return {
        ...state,
        createSeedConfirmMsg: action.msg,
      };

    default:
      return state;
  }
};

export default reducer;
