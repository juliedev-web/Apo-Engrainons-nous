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
  deleteConfirmMessage: state.user.deleteConfirmMessage,
  confirmDelete: state.user.confirmDelete,
  profil: state.user.profil,
  validateUpdateProfil: state.user.validateUpdateProfil,
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
  handleDeleteClick: () => {
    dispatch({ type: 'ON_DELETE_CLICK' });
  },
  handleDeleteConfirm: () => {
    dispatch({ type: 'ON_DELETE_CONFIRM' });
  },
  validateEditProfil: () => {
    dispatch({ type: 'ON_VALIDATE_CONFIRM' });
  },
  closeEditMessage: () => {
    dispatch({ type: 'CLOSE_EDIT_MESSAGE' });
  },
  cancelConfirmDeleteBtn: () => {
    console.log('icicicici');
    dispatch({ type: 'CANCEL_CONFIRM_DELETE_BTN' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormProfil);
