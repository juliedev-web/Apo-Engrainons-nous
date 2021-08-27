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
        console.log('réponse Inscription: ', response);
        store.dispatch({ type: 'SIGNIN_SUCCESS' });
      }).catch((error) => {
        console.error('réponse Inscription: ', error);
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
        console.log('réponse connexion: ', response.data);
        if (response.data.return === 'Email ou mot de passe incorrect' || response.data.error === ' Email not confirm') {
          store.dispatch({ type: 'LOGIN_FAIL', data: response.data.return });
        }
        else {
          console.log('réponse connexion: ', response.data);
          store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data, message: 'Vous êtes connecté !' });
        }
      }).catch((error) => {
        console.error('réponse connexion: ', error);
      });
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
        url: 'https://engrainonsnous.herokuapp.com/user/profil',
        data: {
          pseudo: state.user.pseudoInputValue,
          email: state.user.emailInputValue,
          city: state.user.cityInputValue,
          password: state.user.passwordInputValue,
          confirm: state.user.passwordConfirmInputValue,
        },
      };

      axios(options).then((response) => {
        console.log('inscription réussi', response.data);
        store.dispatch({ type: 'SIGNIN_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error('erreur inscription', error);
      });
    }
      break;
    case 'UPDATE_PROFIL': {
      const state = store.getState();

      if (state.user.passwordInputValue.length > 0) {
        if (state.user.passwordInputValue !== state.user.passwordConfirmInputValue) {
          store.dispatch({ type: 'PWD_NOT_CONFIRMED' });
          return;
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(state.user.passwordInputValue)) {
          store.dispatch({ type: 'PWD_WRONG' });
          return;
        }

        const options = {
          method: 'PATCH',
          url: `https://engrainonsnous.herokuapp.com/update/user/${state.user.profil.id}`,
          data: {
            pseudo: state.user.pseudoInputValue,
            email: state.user.emailInputValue,
            city: state.user.cityInputValue,
            password: state.user.passwordInputValue,
            confirm: state.user.passwordConfirmInputValue,
          },
        };
        axios(options).then((response) => {
          console.log('réponse update profil: ', response);
          store.dispatch({ type: 'UPDATE_SUCCESS_WITH_PASSWORD' });
        }).catch((error) => {
          console.error('réponse update profil: ', error);
        });
        return;
      }

      next(action);

      const options = {
        method: 'PATCH',
        url: `https://engrainonsnous.herokuapp.com/update/user/${state.user.profil.id}`,
        data: {
          pseudo: state.user.pseudoInputValue,
          email: state.user.emailInputValue,
          city: state.user.cityInputValue,
        },
      };

      axios(options).then((response) => {
        console.log('réponse update profil: ', response.data);
        store.dispatch({ type: 'UPDATE_SUCCESS_WITHOUT_PASSWORD' });
      }).catch((error) => {
        console.error('réponse update profil: ', error);
      });
    }
      break;
    case 'ON_DELETE_CONFIRM': {
      const state = store.getState();
      const options = {
        method: 'DELETE',
        url: `https://engrainonsnous.herokuapp.com/delete/user/${state.user.profil.id}`,
      };
      axios(options).then((response) => {
        console.log('réponse delete account: ', response.data);
        store.dispatch({ type: 'DELETE_SUCCESS' });
      }).catch((error) => {
        console.error('réponse delete account: ', error);
      });
    }
      break;

    case 'CHECK_CONFIRM_EMAIL': {
      const options = {
        method: 'PATCH',
        url: `https://engrainonsnous.herokuapp.com/uservalidate/${action.payload.email}/${action.payload.key}`,
      };
      axios(options).then((response) => {
        console.log('réponse check email: ', response.data);
        store.dispatch({ type: 'EMAIL_CONFIRM_SUCCESS' });
      }).catch((error) => {
        console.error('réponse check email: ', error);
        store.dispatch({ type: 'EMAIL_CONFIRM_ERROR' });
      });
    }
      break;

    default:
      next(action);
  }
};

export default authMiddleware;
