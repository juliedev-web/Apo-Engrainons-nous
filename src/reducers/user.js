export const initialState = {
  pseudoInputValue: '',
  emailInputValue: 'ju@ju.com',
  cityInputValue: '',
  passwordInputValue: 'Julie@2021',
  passwordConfirmInputValue: '',

  passwordConfirmMessage: '',
  inscriptionConfirmMessage: '',

  isLogged: false,
  profil: {
    pseudo: 'Profil',
    email: '',
    city: '',
  },
  editProfil: false,
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
        },
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        passwordConfirmMessage: 'Votre compte à bien été créé',
      };
    case 'ON_TOGGLE_CLICK_PROFIL':
      return {
        ...state,
        editProfil: !state.editProfil,
      }
    default:
      return state;
  }
};

export default reducer;
