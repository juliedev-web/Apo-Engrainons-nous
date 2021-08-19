import axios from 'axios';
import { password, mail } from '../data/db';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'ON_SIGNIN_SUBMIT': {
      const state = store.getState();

      if (state.user.passwordInputValue !== state.user.passwordConfirmInputValue) {
        store.dispatch({ type: 'PWD_NOT_CONFIRMED' });
        return;
      }

      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(state.user.passwordInputValue)) {
        store.dispatch({ type: 'PWD_WRONG' });
        return;
      }

      next(action);

      console.log('après next');

      const options = {
        method: 'POST',
        url: 'http://localhost:3001/signin',
        data: {
          pseudo: state.user.pseudoInputValue,
          email: state.user.emailInputValue,
          city: state.user.cityInputValue,
          password: state.user.passwordInputValue,
          confirm: state.user.passwordConfirmInputValue,
        },
      };

      axios(options).then((response) => {
        store.dispatch({ type: 'SIGNIN_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;
    case 'ON_CONNEXION_SUBMIT': {
      const state = store.getState();
      const options = {
        method: 'POST',
        url: 'http://localhost:3001/signin',
        data: {
          email: state.user.emailInputValue,
          password: state.user.passwordInputValue,
        },
      };
      // axios(options).then((response) => {
      //   store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data });
      // }).catch((error) => {
      //   console.error(error);
      // });
      console.log(mail);
      console.log(password);
      console.log(state.user.emailInputValue);
      console.log(state.user.passwordInputValue);
      if (mail === state.user.emailInputValue) {
        if (password === state.user.passwordInputValue) {
          store.dispatch({ type: 'LOGIN_SUCCESS', ok: true });
        }
      }
    }
      break;
    default:
      next(action);
  }
};

export default authMiddleware;
