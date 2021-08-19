import { connect } from 'react-redux';

import FormConnexion from 'src/components/PageConnexion/FormConnexion';
import {
  createChangePseudoInputValueAction,
  createSubmitConnexion,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  emailInputValue: state.user.emailInputValue,
  passwordInputValue: state.user.passwordInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValueChange: (inputValue, inputName) => (
    dispatch(createChangePseudoInputValueAction(inputValue, inputName))
  ),

  handleSubmitSignin: (e) => {
    e.preventDefault();
    dispatch(createSubmitConnexion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormConnexion);
