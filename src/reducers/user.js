export const initialState = {
  pseudoInputValue: '',
  emailInputValue: '',
  cityInputValue: '',
  passwordInputValue: '',
  passwordConfirmInputValue: '',
  passwordConfirmMessage: '',
  inscriptionConfirmMessage: '',
  varietyInputValue: '',
  textAreaDetailValue: '',
  textAreaAdviceValue: '',
  deleteConfirmMessage: '',
  isLogged: false,
  profil: {
    pseudo: '',
    email: '',
    city: '',
    id: '',
  },
  editProfil: false,
  menuIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE_SIGNIN':
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };

    case 'PWD_NOT_CONFIRMED':
      return {
        ...state,
        passwordConfirmMessage: 'Les mots de passe ne correspondent pas !',
      };

    case 'PWD_WRONG':
      return {
        ...state,
        passwordConfirmMessage: 'password required minimum 8char, 1number, 1lowercase, 1uppercase',
      };

    case 'ON_SIGNIN_SUBMIT':
      return {
        ...state,
        passwordConfirmMessage: '',
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
        emailInputValue: '',
        passwordInputValue: '',
        profil: {
          pseudo: action.data.user.pseudo,
          email: action.data.user.email,
          city: action.data.user.city,
          id: action.data.user.id,
        },
      };

    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        emailInputValue: '',
        passwordInputValue: '',
        inscriptionConfirmMessage: 'Votre compte a bien été créé',
      };

    case 'ON_TOGGLE_CLICK_PROFIL':
      return {
        ...state,
        editProfil: !state.editProfil,
        pseudoInputValue: state.profil.pseudo,
        emailInputValue: state.profil.email,
        cityInputValue: state.profil.city,
      };

    case 'UPDATE_SUCCESS_WITH_PASSWORD':
      return {
        ...state,
        editProfil: false,
        profil: {
          ...state.profil,
          pseudo: state.pseudoInputValue,
          email: state.emailInputValue,
          city: state.cityInputValue,
        },
        passwordInputValue: '',
        passwordConfirmInputValue: '',
      };

    case 'UPDATE_SUCCESS_WITHOUT_PASSWORD':
      return {
        ...state,
        editProfil: false,
        profil: {
          ...state.profil,
          pseudo: state.pseudoInputValue,
          email: state.emailInputValue,
          city: state.cityInputValue,
        },
      };

    case 'ON_MENU_CLICK':
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        menuIsOpen: false,
      };
    case 'ON_SHARE_SEED_FORM_CHANGE':
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };
    case 'ON_SUBMIT_SHARED_SEED_SUCCESS':
      return {
        ...state,
        varietyInputValue: '',
        textAreaDetailValue: '',
        textAreaAdviceValue: '',
      };
    case 'ON_DISCONNECT_CLICK':
      return {
        ...state,
        isLogged: false,
        profil: {
          pseudo: '',
          email: '',
          city: '',
          id: '',
        },
      }; case 'DELETE_SUCCESS':
      return {
        ...state,
        deleteConfirmMessage: 'Votre compte a bien été supprimé',
      };
    default:
      return state;
  }
};

export default reducer;
