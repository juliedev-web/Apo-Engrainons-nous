export const initialState = {
  pseudoInputValue: '',
  emailInputValue: '',
  cityInputValue: '',
  passwordInputValue: '',
  passwordConfirmInputValue: '',

  passwordConfirmMessage: '',
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

    default:
      return state;
  }
};

export default reducer;
