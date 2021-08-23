export const createChangePseudoInputValueAction = (inputValue, inputName) => ({
  type: 'ON_INPUT_CHANGE_SIGNIN',
  inputValue,
  inputName,
});

export const createSubmitSigninAction = () => ({
  type: 'ON_SIGNIN_SUBMIT',
});

export const createSubmitConnexion = () => ({
  type: 'ON_CONNEXION_SUBMIT',
});

export const createSubmitProfilAction = () => ({
  type: 'ON_PROFIL_SUBMIT',
});

export const toggleEditProfil = () =>({
  type: 'ON_TOGGLE_CLICK_PROFIL',
});

export const updateProfil = () =>({
  type: 'UPDATE_PROFIL',
});
