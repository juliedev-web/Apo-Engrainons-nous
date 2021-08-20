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
    case 'GETTING_ONE_SEED': {
      const options = {
        method: 'GET',
        url: `https://engrainonsnous.herokuapp.com/seed/${action.id}`,
      };
      axios(options).then((response) => {
        console.log(response.data.result[0]);
        store.dispatch({ type: 'GETTING_ONE_SEED_SUCCESS', data: response.data.result[0] });
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
