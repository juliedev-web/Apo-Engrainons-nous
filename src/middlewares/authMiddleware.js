import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === 'SUBMIT_LOGIN') {
    // on commence par récupérer un instantané du state
    // dans lequel nous viendrons piocher email et password
    const state = store.getState();

    const options = {
      method: 'POST',
      url: 'http://localhost:3001/login',
      data: {
        // on vient chercher dans le state ce qui nous intéresse
        email: state.user.email,
        password: state.user.password,
      },
    };

    axios(options).then((response) => {
      store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data });
    }).catch((error) => {
      console.error(error);
    });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
