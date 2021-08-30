import axios from 'axios';

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
          console.log(response.data.return, response.data.error);
          store.dispatch({ type: 'LOGIN_FAIL', data: (response.data.return || response.data.error) });
        }
        else {
          console.log('réponse connexion: ', response.data);
          store.dispatch({ type: 'LOGIN_SUCCESS', data: response.data, message: 'Vous êtes connecté !' });

          const options2 = {
            method: 'GET',
            url: 'https://api.chatengine.io/users/',
            headers: {
              'PRIVATE-KEY': 'e1537622-de34-46a1-b0b1-668a482550e2',
              'Content-Type': 'application/json',
            },
          };

          axios(options2).then((response2) => {
            console.log(response2);
            localStorage.setItem('chatEngine_id', response2.data.find((user) => user.username === response.data.user.pseudo).id);
          }).catch((error) => {
            console.error(error);
          });
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

          const options2 = {
            method: 'PATCH',
            url: `https://api.chatengine.io/users/${localStorage.getItem('chatEngine_id')}`,
            headers: {
              'PRIVATE-KEY': 'e1537622-de34-46a1-b0b1-668a482550e2',
              'Content-Type': 'application/json',
            },
            data: {
              username: state.user.pseudoInputValue,
              email: state.user.emailInputValue,
              secret: state.user.pseudoInputValue,
            },
          };

          axios(options2).then((response) => {
            console.log(response);
          }).catch((error) => {
            console.error(error);
          });

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

        const options2 = {
          method: 'PATCH',
          url: `https://api.chatengine.io/users/${localStorage.getItem('chatEngine_id')}`,
          headers: {
            'PRIVATE-KEY': 'e1537622-de34-46a1-b0b1-668a482550e2',
            'Content-Type': 'application/json',
          },
          data: {
            username: state.user.pseudoInputValue,
            email: state.user.emailInputValue,
            secret: state.user.pseudoInputValue,
          },
        };

        axios(options2).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });

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

        const options2 = {
          method: 'DELETE',
          url: `https://api.chatengine.io/users/${localStorage.getItem('chatEngine_id')}`,
          headers: {
            'PRIVATE-KEY': 'e1537622-de34-46a1-b0b1-668a482550e2',
          },
        };

        axios(options2).then((response) => {
          console.log(response);
          localStorage.clear();
        }).catch((error) => {
          console.error(error);
        });

        store.dispatch({ type: 'DELETE_SUCCESS' });
      }).catch((error) => {
        console.error('réponse delete account: ', error);
      });
    }

      break;

    case 'HANDLE_SUBMIT_RESET': {
      const state = store.getState();
      const options = {
        method: 'PATCH',
        url: `https://engrainonsnous.herokuapp.com/reset/${state.user.emailResetInputValue}`,
      };
      axios(options).then((response) => {
        store.dispatch({ type: 'SUBMIT_RESET_MESSAGE_SUCCESS' });
      }).catch((error) => {
        console.error(error);
      });
    }

      break;

    case 'CHECK_CONFIRM_EMAIL': {
      const options = {
        method: 'PATCH',
        url: `https://engrainonsnous.herokuapp.com/uservalidate/${action.payload.email}/${action.payload.key}`,
      };

      axios(options).then((response) => {
        store.dispatch({ type: 'CHECK_EMAIL_SUCCESS', message: 'Votre email est confirmé ! Bienvenue 🙂' });

        const options2 = {
          method: 'POST',
          url: 'https://api.chatengine.io/users/',
          headers: {
            'PRIVATE-KEY': 'e1537622-de34-46a1-b0b1-668a482550e2',
            'Content-Type': 'application/json',
          },
          data: {
            email: action.email,
            username: action.pseudo,
            secret: action.pseudo,
          },
        };

        axios(options2).then((response) => {
          console.log(response);
          store.dispatch({ type: 'GET_CHATENGINE_USER_ID', id: response.data.id });
          localStorage.setItem('chatEngine_id', response.data.id);
        }).catch((error) => {
          console.error(error);
        });
      }).catch((error) => {
        store.dispatch({ type: 'CHECK_EMAIL_FAIL', message: 'Une erreur est survenue, contactez le site si elle se reproduit ' });
        console.error(error);
      });
    }

      break;

    case 'CONTACT': {
      const state = store.getState();
      console.log(state.user.profil.pseudo);
      const options = {
        method: 'PUT',
        url: 'https://api.chatengine.io/chats/',
        headers: {
          'Project-ID': '0405202d-3de4-4853-b0d8-84e437aa7cfd',
          'Userd-Name': state.user.profil.pseudo,
          'User-Secret': state.user.profil.pseudo,
          'Content-Type': 'application/json',
        },
        data: {
          usernames: [state.user.profil.pseudo, state.user.profil.yourPseudo],
          title: state.user.profil.pseudo + state.user.profil.yourPseudo,
          is_direct_chat: true,
        },
      };
      axios(options).then((response) => {
        console.log(response);
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
