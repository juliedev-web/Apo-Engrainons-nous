import { connect } from 'react-redux';

import FormProfil from 'src/components/Profil/FormProfil';

import {
  createChangePseudoInputValueAction,
  createSubmitProfilAction,
  toggleEditProfil,
  updateProfil,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudoInputValue: state.user.pseudoInputValue,
  emailInputValue: state.user.emailInputValue,
  cityInputValue: state.user.cityInputValue,
  passwordInputValue: state.user.passwordInputValue,
  passwordConfirmInputValue: state.user.passwordConfirmInputValue,
  passwordConfirmMessage: state.user.passwordConfirmMessage,
  profil: state.user.profil,
  editProfil: state.user.editProfil,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValueChange: (inputValue, inputName) => (
    dispatch(createChangePseudoInputValueAction(inputValue, inputName))
  ),
  handleSubmitProfil: (e) => {
    e.preventDefault();
    dispatch(createSubmitProfilAction());
  },
  toggleEditProfil: () => {
    dispatch(toggleEditProfil());
  },
  handleSubmitEditProfil: (e) => {
    e.preventDefault();
    dispatch(updateProfil());
  },
  handleDisconnect: () => {
    dispatch({ type: 'ON_DISCONNECT_CLICK' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormProfil);