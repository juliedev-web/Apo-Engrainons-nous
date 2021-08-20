import { connect } from 'react-redux';

import FormSignIn from 'src/components/SignIn/FormSignIn';

import {
  createChangePseudoInputValueAction,
  createSubmitSigninAction,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudoInputValue: state.user.pseudoInputValue,
  emailInputValue: state.user.emailInputValue,
  cityInputValue: state.user.cityInputValue,
  passwordInputValue: state.user.passwordInputValue,
  passwordConfirmInputValue: state.user.passwordConfirmInputValue,

  passwordConfirmMessage: state.user.passwordConfirmMessage,
  inscriptionConfirmMessage: state.user.inscriptionConfirmMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputValueChange: (inputValue, inputName) => (
    dispatch(createChangePseudoInputValueAction(inputValue, inputName))
  ),

  handleSubmitSignin: (e) => {
    e.preventDefault();
    dispatch(createSubmitSigninAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
