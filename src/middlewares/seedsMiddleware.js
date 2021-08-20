import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GETTING_LIST': {
      const options = {
        method: 'GET',
        url: 'https://engrainonsnous.herokuapp.com/',
      };
      axios(options).then((response) => {
        console.log(response.data);
        store.dispatch({ type: 'GETTING_LIST_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;
    case 'GETTING_CATEGORY': {
      const options = {
        method: 'GET',
        url: 'https://engrainonsnous.herokuapp.com/seed/category',
      };
      axios(options).then((response) => {
        console.log(`toto ${response.data}`);
        store.dispatch({ type: 'GETTING_CATEGORY_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error(error);
      });
    }
    default:
      next(action);
  }
};

export default authMiddleware;

// if (action.type === 'GETTING_LIST') {
//   // on commence par récupérer un instantané du state
//   // dans lequel nous viendrons piocher email et password

//   const options = {
//     method: 'GET',
//     url: 'https://engrainonsnous.herokuapp.com/',
//   };

//   axios(options).then((response) => {
//     console.log(response.data);
//     store.dispatch({ type: 'GETTING_LIST_SUCCESS', data: response.data });
//   }).catch((error) => {
//     console.error(error);
//   });
// }
// else {
//   next(action);
// }
