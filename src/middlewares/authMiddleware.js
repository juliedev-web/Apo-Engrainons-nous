import axios from 'axios';
// import { password, mail } from '../data/db';

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

      const options = {
        method: 'POST',
        url: 'https://engrainonsnous.herokuapp.com/signup',
        data: {
          pseudo: state.user.pseudoInputValue,
          email: state.user.emailInputValue,
          city: state.user.cityInputValue,
          password: state.user.passwordInputValue,
          confirm: state.user.passwordConfirmInputValue,
        },
      };

      axios(options).then((response) => {
        store.dispatch({ type: 'SIGNIN_SUCCESS' });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;

    case 'ON_CONNEXION_SUBMIT': {
      const state = store.getState();
      const options = {
        method: 'POST',
        url: 'https://engrainonsnous.herokuapp.com/signin',
        data: {
          email: state.user.emailInputValue,
          password: state.user.passwordInputValue,
        },
      };
      axios(options).then((response) => {
        store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error(error);
      });
      // if (mail === state.user.emailInputValue) {
      //   if (password === state.user.passwordInputValue) {
      //     store.dispatch({ type: 'LOGIN_SUCCESS', ok: true });
      //   }
      // }
    }
      break;
    case 'ON_PROFIL_SUBMIT': {
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

      const options = {
        method: 'POST',
        url: 'http://localhost:3001/user/profil',
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
    case 'UPDATE_PROFIL': {
      const state = store.getState();
      if (state.user.passwordInputValue.length > 0) {
        if (state.user.passwordInputValue !== state.user.passwordConfirmInputValue) {
          store.dispatch({ type: 'PWD_NOT_CONFIRMED' });
          return;
        };
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(state.user.passwordInputValue)) {
          store.dispatch({ type: 'PWD_WRONG' });
          return;
        };
        const options = {
          method: 'POST',
          url: 'http://localhost:3001/user/profil',
          data: {
            pseudo: state.user.pseudoInputValue,
            email: state.user.emailInputValue,
            city: state.user.cityInputValue,
            password: state.user.passwordInputValue,
            confirm: state.user.passwordConfirmInputValue,
          },
        };
        axios(options).then((response) => {
          store.dispatch({ type: 'UPDATE_SUCCESS_WITH_PASSWORD', data: response.data });
        }).catch((error) => {
          console.error(error);
        });
        return;
      };
      next(action);

      const options = {
        method: 'POST',
        url: 'http://localhost:3001/user/profil',
        data: {
          pseudo: state.user.pseudoInputValue,
          email: state.user.emailInputValue,
          city: state.user.cityInputValue,
        },
      };

      axios(options).then((response) => {
        store.dispatch({ type: 'UPDATE_SUCCESS_WITHOUT_PASSWORD', data: response.data });
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
