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
  connectionSuccessMessage: state.user.connectionSuccessMessage,
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

});

export default connect(mapStateToProps, mapDispatchToProps)(FormConnexion);
