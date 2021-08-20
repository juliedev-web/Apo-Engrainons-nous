import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GETTING_LIST') {
    // on commence par récupérer un instantané du state
    // dans lequel nous viendrons piocher email et password

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
  else {
    next(action);
  }
};

export default authMiddleware;
