export const createChangePseudoInputValueAction = (inputValue, inputName) => ({
  type: 'ON_INPUT_CHANGE_SIGNIN',
  inputValue,
  inputName,
});

export const createSubmitSigninAction = () => ({
  type: 'ON_SIGNIN_SUBMIT',
});
