import { connect } from 'react-redux';

import FormConnexion from 'src/components/PageConnexion/FormConnexion';
import {
  createChangePseudoInputValueAction,
  createSubmitConnexion,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  emailInputValue: state.user.emailInputValue,
  passwordInputValue: state.user.passwordInputValue,
  connectionFailedMessage: state.user.connectionFailedMessage,
  isLogged: state.user.isLogged,
  fieldConnexion: state.user.fieldConnexion,
  emailResetInputValue: state.user.emailResetInputValue,
  connectionSuccessMessage: state.user.connectionSuccessMessage,
  validateSendMsgResetPwd: state.user.validateSendMsgResetPwd,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValueChange: (inputValue, inputName) => (
    dispatch(createChangePseudoInputValueAction(inputValue, inputName))
  ),

  handleSubmitSignin: (e) => {
    e.preventDefault();
    dispatch(createSubmitConnexion());
  },

  closeMessage: () => dispatch({ type: 'CLOSE_MESSAGE' }),
  hideFieldConnexion: () => dispatch({ type: 'HIDE_FIELD_CONNEXION' }),
  handleInputValuePasswordResetChange: (emailResetInputValue) => dispatch({ type: 'HANDLE_RESETPASSWORD_VALUE', emailResetInputValue }),
  handleSubmitReset: (e) => {
    e.preventDefault();
    dispatch({ type: 'HANDLE_SUBMIT_RESET' });
  },
  showFieldConnexion: () => dispatch({ type: 'SHOW_FIELD_CONNEXION' }),
  handleCancelReinitPwd: () => dispatch({ type: 'CANCEL_REINIT_PWD' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormConnexion);
