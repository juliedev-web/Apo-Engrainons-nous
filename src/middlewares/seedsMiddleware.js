import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GETTING_LIST': {
      const options = {
        method: 'GET',
        url: 'https://engrainonsnous.herokuapp.com/',
      };
      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_LIST_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;
    case 'GETTING_CATEGORY': {
      const options = {
        method: 'GET',
        url: 'https://engrainonsnous.herokuapp.com/category',
      };
      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_CATEGORY_SUCCESS', data: response.data.result });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;
    case 'GET_CATEGORY_FILTERED': {
      const options = {
        method: 'GET',
        url: `https://engrainonsnous.herokuapp.com/category/${action.categoryId}`,
      };
      next(action);
      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_CATEGORY_FILTERED_SUCCESS', data: response.data.result });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;
    default:
      next(action);
  }
};

export default authMiddleware;
